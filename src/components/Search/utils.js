import * as R from 'ramda';

export const locationSearch = R.pipe(
  R.filter(R.propEq('type', 'location')),
  R.sortBy(R.path(['position', 'start']))
);
export const textSearch = R.filter(R.propEq('type', 'text'));

export const isSameMark = (a, b) => a.start === b.start && a.end === b.end && a.value === b.value;

export const searchTextIn = (string, search, from = 0) => {
  if (search.caseSensitive) {
    return string.indexOf(search.value, from);
  } else {
    return string.toLowerCase().indexOf(search.value.toLowerCase(), from);
  }
};

export const takeChunckOf = (string, start, end) => {
  const first = string.slice(0, start);
  const second = string.slice(start, end);
  const third = string.slice(end, string.length);
  return [first, second, third];
};

export const findOccurrences = (mark, string, found = [-1]) => {
  const { length } = mark.value;
  // We add +1 here so we don't search in the same spot as last item was found
  const index = searchTextIn(string, mark, R.last(found) + 1);
  if (index === -1 || length > string.length) {
    return found.slice(1, found.length);
  }
  return findOccurrences(mark, string, [...found, index]);
};

export const sortMarkers = R.sortBy(R.prop('start'));

export const makeSearchRelativeTo = (index, search) => {
  const { position } = search;
  return Object.assign({}, search, {
    position: {
      start: position.start - index,
      end: position.end - index,
    },
  });
};

const markSearchesWith = functor => (string, list, startIndex) => {
  const initialState = { chunks: [], text: string, startIndex };
  const { chunks } = list.reduce(functor, initialState);
  return chunks;
};

export const markPositionalSearches = markSearchesWith(({ chunks, text, startIndex }, mark) => {
  const { position } = makeSearchRelativeTo(startIndex, mark);
  const chunk = {
    value: mark.value,
    color: mark.color,
    start: position.start,
    end: position.end,
    type: mark.type,
    className: mark.className,
  };
  return {
    chunks: [...chunks, chunk],
    text,
    startIndex,
  };
});

export const markTextSearches = markSearchesWith(({ chunks, text, startIndex }, mark) => {
  const occurrences = findOccurrences(mark, text);
  const newChunks = occurrences.map(index => ({
    value: mark.value,
    start: index,
    end: index + mark.value.length,
    color: mark.color,
    type: mark.type,
    className: mark.className,
  }));
  return {
    chunks: chunks.concat(newChunks),
    text,
    startIndex,
  };
});

function mergeEntries(list, merged) {
  if (list.length === 0) {
    return merged;
  } else if (list.length === 1) {
    return R.append(list[0], merged);
  }
  const [first, second, ...rest] = list;
  if (first.end <= second.start) {
    return mergeEntries(rest, [...merged, first, second]);
  }
  // At this point the starting position of first mark is either equal or closer than second one
  // Text search takes priority
  if (second.type === 'text' && first.type === 'location') {
    const newFirst = R.assoc('end', second.start, first);
    return mergeEntries(rest, [...merged, newFirst, second]);
  }
  if (first.end >= second.end) {
    return mergeEntries(rest, [...merged, first]);
  } else {
    const newSecond = R.assoc('start', first.end, second);
    return mergeEntries(rest, [...merged, first, newSecond]);
  }
}

export const combineEntries = (positional, text) => {
  const entries = R.pipe(
    sortMarkers,
    R.uniqWith(isSameMark)
  )(text.concat(positional));
  return mergeEntries(entries, []);
};

export const markEntries = markSearchesWith(({ chunks, text, startIndex }, mark, index, list) => {
  const { position } = makeSearchRelativeTo(startIndex, {
    ...mark,
    position: { start: mark.start, end: mark.end },
  });
  const [left, matched, remaining] = takeChunckOf(text, position.start, position.end);
  const chunk = {
    value: matched,
    color: mark.color,
    start: mark.start,
    end: mark.end,
    className: mark.className,
  };
  let newChunks = [chunk];
  if (left.length !== 0) {
    newChunks = [left, chunk];
  }
  if (index === list.length - 1 && remaining.length !== 0) {
    newChunks = R.append(remaining, newChunks);
  }
  return {
    chunks: chunks.concat(newChunks),
    text: remaining,
    startIndex: startIndex + left.length + matched.length,
  };
});

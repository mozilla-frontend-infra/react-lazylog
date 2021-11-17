import { List, Range } from 'immutable';
import reactStringReplace from 'react-string-replace';

export const ENCODED_NEWLINE = 10; // \n
export const ENCODED_CARRIAGE_RETURN = 13; // \r
export const SEARCH_BAR_HEIGHT = 45;
export const SEARCH_MIN_KEYWORDS = 2;

export const isNewline = current =>
  current === ENCODED_NEWLINE || current === ENCODED_CARRIAGE_RETURN;

export const getScrollIndex = ({
  follow = false,
  scrollToLine = 0,
  previousCount = 0,
  count = 0,
  offset = 0,
}) => {
  if (follow) {
    return count - 1 - offset;
  } else if (scrollToLine && previousCount > scrollToLine) {
    return -1;
  } else if (scrollToLine) {
    return scrollToLine - 1 - offset;
  }

  return -1;
};

export const getHighlightRange = highlight => {
  if (!highlight) {
    return Range(0, 0);
  }

  if (!Array.isArray(highlight)) {
    return Range(highlight, highlight + 1);
  }

  if (highlight.length === 1) {
    return Range(highlight[0], highlight[0] + 1);
  }

  return Range(highlight[0], highlight[1] + 1);
};

export const bufferConcat = (a, b) => {
  const buffer = new Uint8Array(a.length + b.length);

  buffer.set(a, 0);
  buffer.set(b, a.length);

  return buffer;
};

export const convertBufferToLines = (current, previous) => {
  const buffer = previous ? bufferConcat(previous, current) : current;
  const { length } = buffer;
  let lastNewlineIndex = 0;
  let index = 0;
  const lines = List().withMutations(lines => {
    while (index < length) {
      const current = buffer[index];
      const next = buffer[index + 1];

      if (isNewline(current, next)) {
        lines.push(buffer.subarray(lastNewlineIndex, index));
        lastNewlineIndex =
          current === ENCODED_CARRIAGE_RETURN && next === ENCODED_NEWLINE
            ? index + 2
            : index + 1;

        index = lastNewlineIndex;
      } else {
        index += 1;
      }
    }
  });

  return {
    lines,
    remaining:
      index !== lastNewlineIndex ? buffer.slice(lastNewlineIndex) : null,
  };
};

export const getLinesLengthRanges = rawLog => {
  const { length } = rawLog;
  const linesRanges = [];
  let lastNewlineIndex = 0;
  let index = 0;

  while (index < length) {
    const current = rawLog[index];
    const next = rawLog[index + 1];

    if (isNewline(current, next)) {
      linesRanges.push(index);
      lastNewlineIndex =
        current === ENCODED_CARRIAGE_RETURN && next === ENCODED_NEWLINE
          ? index + 2
          : index + 1;

      index = lastNewlineIndex;
    } else {
      index += 1;
    }
  }

  return linesRanges;
};

export const searchFormatPart = ({
  searchKeywords,
  nextFormatPart,
  caseInsensitive,
  replaceJsx,
}) => part => {
  let formattedPart = part;

  if (nextFormatPart) {
    formattedPart = nextFormatPart(part);
  }

  if (caseInsensitive) {
    if (part.toLowerCase().includes(searchKeywords.toLowerCase())) {
      return reactStringReplace(formattedPart, searchKeywords, replaceJsx);
    }
  } else if (part.includes(searchKeywords)) {
    return reactStringReplace(formattedPart, searchKeywords, replaceJsx);
  }

  return formattedPart;
};

// General Email Regex (RFC 5322 Official Standard)
const emailPattern =
  '^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|"[a-zA-Z0-9.+!% -]{1,64}")';
const emailDomainPattern = '[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$';
const emailRegex = new RegExp(`${emailPattern}@${emailDomainPattern}`);
// Add some RegEx magic from xterm.js | xterm-addon-web-links
// https://github.com/xtermjs/xterm.js/blob/581272ee51129ee2431718b03e90755aed63d8ba/addons/xterm-addon-web-links/src/WebLinksAddon.ts
const protocolClause = '(((http|ftp)?s?s?)(:)(/{2}))';
const domainCharacterSet = '[\\da-z\\.-]+';
const negatedDomainCharacterSet = '[^\\da-z\\.-]+';
const domainBodyClause = `(${domainCharacterSet})`;
const tldClause = '([a-z\\.]{2,6})';
const ipClause = '((\\d{1,3}\\.){3}\\d{1,3})';
const localHostClause = '(localhost)';
const portClause = '(:\\d{1,5})';
const hostClause = `((${domainBodyClause}\\.${tldClause})|${ipClause}|${localHostClause})${portClause}?`;
const pathCharacterSet = '(\\/[\\/\\w\\.\\-%~:+@]*)*([^:"\'\\s])';
const pathClause = `(${pathCharacterSet})?`;
const queryStringHashFragmentCharacterSet =
  "[0-9\\w\\[\\]\\(\\)\\/\\?\\!#@$%&'*+,:;~\\=\\.\\-]*";
const queryStringClause = `(\\?${queryStringHashFragmentCharacterSet})?`;
const hashFragmentClause = `(#${queryStringHashFragmentCharacterSet})?`;
const negatedPathCharacterSet = '[^\\/\\w\\.\\-%]+';
const bodyClause =
  hostClause + pathClause + queryStringClause + hashFragmentClause;
const start = `(?:^|${negatedDomainCharacterSet})(`;
const end = `)($|${negatedPathCharacterSet})`;
const strictUrlRegex = new RegExp(
  `${start + protocolClause}?${bodyClause}${end}`,
  'gim'
);

export const parseLinks = data => {
  const result = [];

  data.forEach(tmp => {
    const arr = tmp.text.split(' ');

    arr.forEach(text => {
      if (text.search(strictUrlRegex) > -1) {
        const email = true;
        const link = true;

        if (text.search(emailRegex) > -1) {
          result.push({ text, email });

          return;
        }

        if (text.search(protocolClause) === -1) {
          result.push({ text: `https://${text}`, link });

          return;
        }

        result.push({
          text,
          link,
        });

        return;
      }

      result.push({ text });
    });
  });

  return result;
};

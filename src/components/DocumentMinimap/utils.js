const itemLength = item => (typeof item === 'string' ? item.length : item.value.length);

export function resizeEntries(lines, lineHeight, charWidth) {
  return lines.reduce((list, row, rowIndex) => {
    const columns = row.reduce(
      ({ entries, position }, column) => {
        const newPosition = position + itemLength(column);
        if (typeof column === 'string') {
          return { entries, position: newPosition };
        }
        const newEntry = {
          top: Math.floor(rowIndex * lineHeight) + 1,
          left: Math.floor(position * charWidth),
          width: Math.floor(itemLength(column) * charWidth),
          height: Math.round(lineHeight),
          color: column.color,
        };
        return { entries: [...entries, newEntry], position: newPosition };
      },
      { entries: [], position: 0 }
    );
    return list.concat(columns.entries);
  }, []);
}

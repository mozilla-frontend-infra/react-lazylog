export const fontSize = 14;
export const itemLength = item => (typeof item === 'string' ? item.length : item.value.length);
export const rowCharCount = row => row.reduce((sum, item) => sum + itemLength(item), 0);

export function resizeEntries(lines, lineHeight, charWidth) {
  return lines.reduce((list, row, rowIndex) => {
    const columns = row.reduce(
      ({ entries, position }, column) => {
        const newPosition = position + itemLength(column);
        if (typeof column === 'string') {
          return { entries, position: newPosition };
        }
        const newEntry = {
          top: Math.floor(rowIndex * lineHeight) + 10,
          left: Math.floor(position * charWidth),
          width: Math.max(Math.floor(itemLength(column) * charWidth), 2),
          height: Math.max(1, lineHeight),
          color: column.color,
          value: column.value,
        };
        return { entries: [...entries, newEntry], position: newPosition };
      },
      { entries: [], position: 0 }
    );
    return list.concat(columns.entries);
  }, []);
}

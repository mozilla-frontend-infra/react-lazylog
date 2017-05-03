import React from 'react';
import { LinePart } from './LinePart';
import { lineContent } from './styles.css';

export const LineContent = ({ children, formatPart, number, style }) => {
  if (children) {
    const last = children[children.length - 1];

    if (last && typeof last.text === 'string' && !last.text.endsWith('\n')) {
      last.text += '\n';
    }
  }

  return (
    <span className={lineContent} style={style}>
      {children && children.map((part, n) => (
        <LinePart part={part} format={formatPart} key={`line-${number}-${n}`} />
      ))}
    </span>
  );
};

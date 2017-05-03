import React from 'react';
import { LineNumber } from './LineNumber';
import { LineContent } from './LineContent';
import { line, lineHighlight, lineHover } from './styles.css';

export const Line = ({
  children,
  formatPart,
  highlight = false,
  onLineNumberClick,
  onRowClick,
  number,
  rowHeight,
  style
}) => {
  const handleHover = ({ currentTarget, type }) => currentTarget.classList.toggle(lineHover, type === 'mouseenter');
  const className = highlight ? `${line} ${lineHighlight}` : line;
  const lineStyle = {
    ...style,
    lineHeight: `${style ? style.height || rowHeight : rowHeight}px`,
    minWidth: style ? style.width || '100%' : '100%',
    width: null
  };

  return (
    <div className={className} style={lineStyle} onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <LineNumber number={number} highlight={highlight} onClick={onLineNumberClick} />
      <LineContent number={number} onClick={onRowClick} formatPart={formatPart}>{children}</LineContent>
    </div>
  );
};

Line.defaultProps = {
  style: {}
};

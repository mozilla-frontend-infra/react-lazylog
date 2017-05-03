import React from 'react';
import { lineNumber, lineNumberHighlight } from './styles.css';

export const LineNumber = ({ highlight, onClick, number, style }) => (
  <a
    id={number}
    onClick={onClick}
    className={highlight ? lineNumberHighlight : lineNumber}
    style={style} />
);

LineNumber.defaultProps = {
  style: {}
};

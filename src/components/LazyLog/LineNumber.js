import React from 'react';
import { lineNumber } from './line-number.css';

export class LineNumber extends React.Component {
  render() {
    const { highlight, highlightStyle, number, onClick, style } = this.props;

    return (
      <a
        id={number}
        className={lineNumber}
        style={highlight ? { ...style, ...highlightStyle } : style}
        onClick={onClick} />
    );
  }
}

LineNumber.defaultProps = {
  onClick: Function.prototype,
  style: {
    display: 'inline-block',
    width: 55,
    marginLeft: 15,
    marginRight: 15,
    color: '#666666',
    userSelect: 'none',
    textAlign: 'right',
    minWidth: 40,
    cursor: 'pointer',
    textDecoration: 'none',
    paddingRight: '1em'
  },
  highlightStyle: {
    color: '#ffffff'
  }
};

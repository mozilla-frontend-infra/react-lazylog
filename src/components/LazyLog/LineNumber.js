import React from 'react';
import { lineNumber, lineNumberHighlight } from './styles.css';

export class LineNumber extends React.PureComponent {
  render() {
    const { highlight, number, onClick, style } = this.props;

    return (
      <a
        id={number}
        className={highlight ? lineNumberHighlight : lineNumber}
        style={style}
        onClick={onClick} />
    );
  }
}

LineNumber.defaultProps = {
  onClick: null,
  style: null
};

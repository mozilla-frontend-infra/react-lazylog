import { PureComponent } from 'react';
import { bool, func, number, object } from 'prop-types';
import { lineNumber, lineNumberHighlight } from './index.module.css';

/**
 * The line number of a single line.
 * The anchor contained within is interactive, and will highlight the
 * entire line upon selection.
 */
export default class LineNumber extends PureComponent {
  static propTypes = {
    /**
     * The line number to display in the anchor.
     */
    number: number.isRequired,
    /**
     * Specify whether this line is highlighted.
     */
    highlight: bool,
    /**
     * Execute a function when the line number is clicked.
     */
    onClick: func,
    style: object,
  };

  static defaultProps = {
    style: null,
    highlight: false,
    onClick: null,
  };

  handleClick = () => {
    this.props.onClick(this.props.number);
  };

  render() {
    const { highlight, onClick, number, style } = this.props;

    return (
      <a
        id={number}
        onClick={onClick ? this.handleClick : null}
        className={highlight ? lineNumberHighlight : lineNumber}
        style={style}
      />
    );
  }
}

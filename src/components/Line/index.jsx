import { Component } from 'react';
import { arrayOf, bool, func, number, object, shape, string } from 'prop-types';
import LineNumber from '../LineNumber';
import LineContent from '../LineContent';
import {
  line,
  lineHighlight,
  lineHover,
  lineSelectable,
} from './index.module.css';

/**
 * A single row of content, containing both the line number
 * and any text content within the line.
 */
export default class Line extends Component {
  static propTypes = {
    data: arrayOf(
      shape({
        text: string,
      })
    ).isRequired,
    number,
    rowHeight: number,
    highlight: bool,
    selectable: bool,
    style: object,
    formatPart: func,
    onLineNumberClick: func,
    onRowClick: func,
  };

  static defaultProps = {
    highlight: false,
    selectable: false,
    style: {},
    formatPart: null,
    onLineNumberClick: null,
    onRowClick: null,
  };

  handleHover = ({ currentTarget, type }) => {
    currentTarget.classList.toggle(lineHover, type === 'mouseenter');
  };

  render() {
    const {
      data,
      formatPart,
      highlight,
      selectable,
      onLineNumberClick,
      onRowClick,
      number,
      rowHeight,
      style,
    } = this.props;
    const highlightClass = highlight ? ` ${lineHighlight}` : '';
    const selectableClass = selectable ? ` ${lineSelectable}` : '';
    const className = `${line}${highlightClass}${selectableClass}`;
    const lineStyle = {
      ...style,
      lineHeight: `${style ? style.height || rowHeight : rowHeight}px`,
      minWidth: style ? style.width || '100%' : '100%',
      width: null,
    };

    return (
      <div
        className={className}
        style={lineStyle}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}>
        <LineNumber
          number={number}
          highlight={highlight}
          onClick={onLineNumberClick}
        />
        <LineContent
          number={number}
          onClick={onRowClick}
          formatPart={formatPart}
          data={data}
        />
      </div>
    );
  }
}

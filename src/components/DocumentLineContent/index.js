import { Component } from 'react';
import { arrayOf, func, number, object, oneOfType, string } from 'prop-types';
import { lineContent } from './index.module.css';

/**
 * The container of all the individual pieces of content that
 * is on a single line. May contain one or more `LinePart`s
 * depending on ANSI parsing.
 */
export default class LineContent extends Component {
  static propTypes = {
    /**
     * The pieces of data to render in a line. Will typically
     * be multiple items in the array if ANSI parsed prior.
     */
    data: arrayOf(oneOfType([object, string])).isRequired,
    /**
     * The line number being rendered.
     */
    number: number.isRequired,
    style: object,
  };

  static defaultProps = {
    formatPart: null,
    style: null,
  };

  renderEntry = (entry, index) => {
    const key = `line-${this.props.number}-${index}`;
    if (typeof entry === 'string') {
      return <span key={key}>{entry}</span>;
    }
    return (
      <span key={key} style={{ backgroundColor: entry.color }}>
        {entry.value}
      </span>
    );
  };

  render() {
    const { data, style } = this.props;
    return (
      <div className={lineContent} style={style}>
        {data.map(this.renderEntry)}
      </div>
    );
  }
}

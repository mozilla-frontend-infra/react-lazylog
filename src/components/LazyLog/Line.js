import React from 'react';
import { LineNumber } from './LineNumber';
import { LineContent } from './LineContent';
import { line, lineHighlight, lineHover } from './styles.css';

export class Line extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  componentWillMount() {
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(e) {
    this.setState({ hover: e.type === 'mouseenter' });
  }

  render() {
    const { children, highlight, hover, number, onLineNumberClick, onRowClick, rowHeight, style } = this.props;
    const className = hover ? lineHover : (highlight ? lineHighlight : line);
    const lineStyle = {
      ...style,
      lineHeight: `${style ? style.height || rowHeight : rowHeight}px`,
      minWidth: style ? style.width || '100%' : '100%',
      width: null
    };

    return (
      <div className={className} style={lineStyle} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <LineNumber number={number} highlight={highlight} onClick={onLineNumberClick} />
        <LineContent number={number} onClick={onRowClick}>{children}</LineContent>
      </div>
    );
  }
}

Line.defaultProps = {
  onLineNumberClick: null,
  onRowClick: null,
  highlight: false,
  style: null
};

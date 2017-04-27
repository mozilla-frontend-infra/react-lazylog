import React from 'react';
import { LinePart } from './LinePart';
import { LineNumber } from './LineNumber';

export class Line extends React.Component {
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

  getLineStyle() {
    return {
      ...Line.defaultProps.style,
      ...this.props.style,
      ...(this.props.highlight ? this.props.highlightStyle : {}),
      ...(this.state.hover ? this.props.hoverStyle : {})
    };
  }

  render() {
    const { children, highlight, number, onLineNumberClick, onRowClick } = this.props;
    const lineStyle = this.getLineStyle();

    return (
      <div style={lineStyle} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
        <LineNumber number={number} highlight={highlight} onClick={onLineNumberClick} />
        <span style={{ userSelect: 'initial' }} onClick={onRowClick}>
          {children.map((child, n) => {
            const part = n === children.length - 1 && typeof child.text === 'string' ?
              { ...child, text: `${child.text}\n` } :
              child;

            return (
              <LinePart part={part} format={this.props.formatPart} key={`line-${number}-${n}`} />
            );
          })}
        </span>
      </div>
    );
  }
}

Line.defaultProps = {
  onLineNumberClick: null,
  onRowClick: null,
  highlight: false,
  style: {
    margin: 0,
    paddingRight: 20,
    userSelect: 'none',
    overflowY: 'hidden'
  },
  hoverStyle: {
    backgroundColor: '#444444'
  },
  highlightStyle: {
    backgroundColor: '#666666'
  }
};

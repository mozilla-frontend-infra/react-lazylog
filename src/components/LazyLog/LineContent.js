import React from 'react';
import { LinePart } from './LinePart';
import { lineContent } from './styles.css';

export class LineContent extends React.PureComponent {
  componentWillReceiveProps({ children }) {
    if (children) {
      const last = children[children.length - 1];

      if (last && typeof last.text === 'string' && !last.text.endsWith('\n')) {
        last.text += '\n';
      }
    }
  }

  render() {
    const { children, onClick, number, style } = this.props;

    return (
      <span className={lineContent} style={style} onClick={onClick}>
        {children && children.map((part, n) => {
          // if (n === children.length - 1 && typeof part.text === 'string') {
          //   part.text += `\n`;
          // }

          return <LinePart part={part} format={this.props.formatPart} key={`line-${number}-${n}`} />;
        })}
      </span>
    );
  }
}

LineContent.defaultProps = {
  onClick: null,
  formatPart: null,
  style: null
};

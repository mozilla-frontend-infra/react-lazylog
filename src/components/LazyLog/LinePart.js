import React from 'react';
import styles from './styles.css';

export class LinePart extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  getClassName() {
    const { part } = this.props;
    const className = [];

    if (part.foreground && part.bold) {
      className.push(styles[`${part.foreground}Bold`], styles.bold);
    } else if (part.foreground) {
      className.push(styles[part.foreground]);
    } else if (part.bold) {
      className.push(styles.bold);
    }

    if (part.background) {
      className.push(styles[`${part.background}Bg`]);
    }

    if (part.italic) {
      className.push(styles.italic);
    }

    if (part.underline) {
      className.push(styles.underline);
    }

    return className.join(' ');
  }

  render() {
    const { format, part, style } = this.props;

    return (
      <span className={this.getClassName()} style={style}>
        {format ? format(part.text) : part.text}
      </span>
    );
  }
}

LinePart.defaultProps = {
  style: null
};

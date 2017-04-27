import React from 'react';
import merge from 'deepmerge';

export class LinePart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: this.getStyles()
    };
  }

  getStyles() {
    const { part, foreground, foregroundBold, background, bold, italic, underline, style } = this.props;
    const styles = [style];

    if (part.foreground && part.bold) {
      styles.push(foregroundBold[part.foreground]);
      styles.push(bold);
    } else if (part.foreground) {
      styles.push(foreground[part.foreground]);
    } else if (part.bold) {
      styles.push(bold);
    }

    if (part.background) {
      styles.push(background[part.background]);
    }

    if (part.italic) {
      styles.push(italic);
    }

    if (part.underline) {
      styles.push(underline);
    }

    if (!styles.length) {
      return null;
    } else if (styles.length === 1) {
      return styles[0];
    } else {
      return merge.all(styles);
    }
  }

  render() {
    const { format, part } = this.props;

    return (
      <span style={this.state.style}>
        {format ? format(part.text) : part.text}
      </span>
    );
  }
}

LinePart.defaultProps = {
  foreground: {
    black: {
      color: '#4e4e4e'
    },
    red: {
      color: '#ff6c60'
    },
    green: {
      color: '#00aa00'
    },
    yellow: {
      color: '#ffffb6'
    },
    blue: {
      color: '#96cbfe'
    },
    magenta: {
      color: '#ff73fd'
    },
    cyan: {
      color: '#00aaaa'
    },
    white: {
      color: '#eeeeee'
    },
    grey: {
      color: '#969696'
    }
  },
  foregroundBold: {
    black: {
      color: '#7c7c7c'
    },
    red: {
      color: '#ff9b93'
    },
    green: {
      color: '#ceffab'
    },
    yellow: {
      color: '#ffffcb'
    },
    blue: {
      color: '#b5dcfe'
    },
    magenta: {
      color: '#ff9cfe'
    },
    cyan: {
      color: '#55ffff'
    },
    white: {
      color: '#ffffff'
    },
    grey: {
      color: '#969696'
    }
  },
  background: {
    black: {
      backgroundColor: '#4e4e4e'
    },
    red: {
      backgroundColor: '#ff6c60'
    },
    green: {
      backgroundColor: '#00aa00'
    },
    yellow: {
      backgroundColor: '#ffffb6'
    },
    blue: {
      backgroundColor: '#96cbfe'
    },
    magenta: {
      backgroundColor: '#ff73fd'
    },
    cyan: {
      backgroundColor: '#00aaaa'
    },
    white: {
      backgroundColor: '#eeeeee'
    },
    grey: {
      backgroundColor: '#969696'
    }
  },
  bold: {
    fontWeight: 'bold'
  },
  italic: {
    fontStyle: 'italic'
  },
  underline: {
    textDecoration: 'underline'
  }
};

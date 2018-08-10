import { PureComponent } from 'react';
import { number, string, func } from 'prop-types';
import throttle from 'lodash.throttle';
import sid from 'shortid';

import { rowCharCount, resizeEntries, fontSize } from './utils';

const getTop = element => {
  if (element.style.top.length === 0) {
    return 0;
  }
  return parseInt(element.style.top.replace('px', '0'), 10);
};

export default class DocumentMinimap extends PureComponent {
  static propTypes = {
    height: number.isRequired,
    width: number.isRequired,
    selector: string.isRequired,
    addListener: func.isRequired,
    throttle: number,
  };

  static defaultProps = {
    throttle: 100,
  };

  constructor(props) {
    super(props);
    this.syncronise = throttle(this.sync, props.throttle);
    this.canvas = null;
    this.state = {
      scrollTop: 0,
    };
  }

  componentDidMount() {
    this.props.addListener(this.syncronise);

    this.init();
  }

  getElement() {
    return document.querySelector(this.props.selector);
  }

  init() {
    const { width, height, lines, rowHeight } = this.props;

    const element = this.getElement();
    const { scrollWidth, scrollHeight, scrollTop, scrollLeft } = element;

    const ratioX = width / scrollWidth;
    const ratioY = height / scrollHeight;

    const lineHeight = ratioY * rowHeight;
    const charWidth = ratioX * fontSize;

    const rows = resizeEntries(lines, lineHeight, charWidth);
    console.log({ lines, rows });
    this.drawEntries(rows);
  }

  drawEntries(entries) {
    const ctx = this.canvas.getContext('2d');
    ctx.fillStyle = 'rgba(211,211,211, 0.5)';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    entries.map(entry => {
      ctx.fillStyle = entry.color;
      ctx.fillRect(entry.top, entry.left, entry.width, entry.height);
    });
  }

  sync = ({ scrollTop, scrollHeight }) => {
    if (!this.scroll) {
      return;
    }
    const ratioY = this.props.height / scrollHeight;
    // const offset = parseInt(this.scroll.style.height.replace('px', ''), 10) / 2;
    const top = Math.round(ratioY * scrollTop);
    this.scroll.style.top = `${top}px`;
  };

  render() {
    const { width, height } = this.props;
    return (
      <div
        style={{
          position: 'absolute',
          top: '0',
          right: '1em',
          zIndex: 200,
          height: height + 20,
          width,
        }}
      >
        <div
          ref={scroll => {
            this.scroll = scroll;
          }}
          style={{
            width,
            position: 'absolute',
            height: 40,
            backgroundColor: 'rgba(0,0,0,0.5)',
            transition: 'top 0.2s',
          }}
        />
        <canvas
          //  20 here because of offset for scroll bar
          height={height + 20}
          width={width}
          ref={node => {
            this.canvas = node;
          }}
        />
      </div>
    );
  }
}

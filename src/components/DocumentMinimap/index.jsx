import { PureComponent } from 'react';
import { number, string, func } from 'prop-types';
import throttle from 'lodash.throttle';
import sid from 'shortid';

import { rowCharCount, resizeEntries, fontSize } from './utils';
import * as classes from './index.module.css';

import { Canvas } from './Canvas';
import { Core } from './Core';

// const getTop = element => {
//   if (element.style.top.length === 0) {
//     return 0;
//   }
//   return parseInt(element.style.top.replace('px', '0'), 10);
// };

export default class DocumentMinimap extends PureComponent {
  static propTypes = {
    height: number.isRequired,
    width: number.isRequired,
    selector: string.isRequired,
    addListener: func.isRequired,
    throttle: number,
    backgroundColor: string,
  };

  static defaultProps = {
    throttle: 50,
    backgroundColor: 'rgba(211,211,211, 0.5)',
  };

  constructor(props) {
    super(props);
    this.canvas = Canvas.empty();
    this.core = Core.from({
      selector: this.props.selector,
      container: window.document,
      width: props.width,
      height: props.height,
      rowHeight: props.rowHeight,
    });
    this.syncronise = throttle(this.core.synchronise, props.throttle);
    this.state = {
      scrollTop: 0,
    };
  }

  componentDidMount() {
    this.props.addListener(this.syncronise);
    this.canvas.drawEntries(this.core.calculateSizes(this.props.lines));
  }

  setCanvas = node => {
    this.canvas = Canvas.from(node, {
      backgroundColor: this.props.backgroundColor,
    });
  };
  // getElement() {
  //   return document.querySelector(this.props.selector);
  // }

  // init() {
  //   const { width, height, lines, rowHeight } = this.props;

  //   const element = this.getElement();
  //   const { scrollWidth, scrollHeight, scrollTop, scrollLeft } = element;

  //   const ratioX = width / scrollWidth;
  //   const ratioY = height / scrollHeight;

  //   const lineHeight = Math.max(ratioY * rowHeight, 2);
  //   const charWidth = Math.max(ratioX * fontSize, 2);

  //   const rows = resizeEntries(lines, lineHeight, charWidth);
  //   // console.log({ lines, rows });
  //   this.canvas.drawEntries(rows);
  // }

  render() {
    const { width, height } = this.props;
    return (
      <div
        className={classes.container}
        style={{
          height: height,
          width,
        }}
        onMouseDown={this.core.down}
        onTouchStart={this.core.down}
        onTouchMove={this.core.move}
        onMouseMove={this.core.move}
        onTouchEnd={this.core.up}
        onMouseUp={this.core.up}
      >
        <div ref={this.core.setScroll} className={classes.scroll} style={{ width }} />
        <canvas height={height} width={width} ref={this.setCanvas} />
      </div>
    );
  }
}

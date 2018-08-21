import { PureComponent } from 'react';
import { number, string, func } from 'prop-types';
import throttle from 'lodash.throttle';
import sid from 'shortid';

import { rowCharCount, resizeEntries, fontSize } from './utils';
import * as classes from './index.module.css';

import { Canvas } from './Canvas';
import { Core } from './Core';

export default class DocumentMinimap extends PureComponent {
  static propTypes = {
    height: number.isRequired,
    width: number.isRequired,
    selector: string.isRequired,
    addListener: func.isRequired,
    updateScroll: func.isRequired,
    throttle: number,
    backgroundColor: string,
    scrollHeight: number,
    fontSize: number,
  };

  static defaultProps = {
    throttle: 50,
    backgroundColor: 'rgba(211,211,211, 0.5)',
    scrollHeight: 40,
    fontSize: 14,
  };

  constructor(props) {
    super(props);
    this.canvas = Canvas.empty();
    this.core = Core.from({
      selector: this.props.selector,
      container: window.document,
      width: props.width,
      height: props.height,
      updateContainerScroll: props.updateScroll,
      scrollHeight: props.scrollHeight,
    });
    this.syncronise = throttle(this.core.synchronise, props.throttle);
    this.state = {
      scrollTop: 0,
    };
  }

  componentDidMount() {
    this.props.addListener(this.syncronise);
    this.canvas.drawEntries(
      this.core.calculateSizes(this.props.lines, this.props.rowHeight, this.props.fontSize)
    );
  }

  setCanvas = node => {
    this.canvas = Canvas.from(node, {
      backgroundColor: this.props.backgroundColor,
    });
  };

  render() {
    const { width, height, scrollHeight } = this.props;
    return (
      <div
        className={classes.container}
        style={{
          height: height,
          width,
        }}
        onMouseDown={this.core.onMouseDown}
        onTouchStart={this.core.onMouseDown}
        onTouchMove={this.core.move}
        onMouseMove={this.core.move}
        onTouchEnd={this.core.onMouseUp}
        onMouseUp={this.core.onMouseUp}
      >
        <div
          ref={this.core.setScroll}
          className={classes.scroll}
          style={{ width, height: scrollHeight }}
        />
        <canvas height={height} width={width} ref={this.setCanvas} />
      </div>
    );
  }
}

import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Helmet from 'react-helmet';
import { parse, stringify } from 'querystring';
import throttle from 'lodash.throttle';
import LazyList from '../LazyList';
import LazyItem from '../LazyItem';
import Spinner from '../Spinner';
import Warning from '../Warning';
import Cog from '../Cog';
import bufferSearch from '../util/buffer-search';
import ChunkWorker from 'worker!./chunk-worker';

const ENCODER = new TextEncoder('utf-8');
const html = document.documentElement;
const body = document.body;

let position = html.scrollTop || body.scrollTop;

export default class LogViewer extends React.Component {
  constructor(props) {
    super(props);

    const qs = parse(location.search.substr(1));

    this.state = {
      ...qs,
      wrapLines: qs.wrapLines === 'true',
      showLineNumbers: qs.showLineNumbers !== 'false',
      jumpToHighlight: qs.jumpToHighlight === 'true',
      followLog: qs.followLog === 'true',
      isLoading: true,
      chunkHeights: [],
      offset: 0,
      minLineHeight: 0,
      error: false,
      toolbarOpen: false
    };

    /* eslint-disable react/no-direct-mutation-state */
    if (!this.state.lineNumber && this.state.jumpToHighlight && this.state.highlightStart) {
      this.state.lineNumber = this.state.highlightStart;
    }

    if (!this.state.lineNumber) {
      this.state.didLineJump = true;
    }
    /* eslint-enable react/no-direct-mutation-state */
  }

  componentWillMount() {
    window.addEventListener('message', e => this.handleMessage(e));
  }

  componentWillUpdate(nextProps, nextState = this.state) {
    const qs = stringify({
      url: nextState.url,
      highlightStart: nextState.highlightStart,
      highlightEnd: nextState.highlightEnd,
      lineNumber: nextState.lineNumber,
      wrapLines: nextState.wrapLines,
      showLineNumbers: nextState.showLineNumbers,
      jumpToHighlight: nextState.jumpToHighlight,
      followLog: nextState.followLog
    });

    if (!this.state.followLog && nextState.followLog) {
      this.followLog();
    }

    history.pushState(null, '', `${location.origin}${location.pathname}?${qs}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidMount() {
    this.request();
    this.handleJump();
  }

  componentDidUpdate(prevProps, prevState) {
    const shouldJump = prevState.lineNumber !== this.state.lineNumber ||
      this.state.jumpToHighlight &&
      prevState.highlightStart !== this.state.highlightStart;

    if (shouldJump) {
      this.handleJump();
    }
  }

  handleJump() {
    const { lineNumber, highlightStart, jumpToHighlight, followLog } = this.state;

    if (lineNumber) {
      this.jumpToQueriedLine(lineNumber);
    } else if (jumpToHighlight && highlightStart) {
      this.jumpToQueriedLine(highlightStart);
    } else if (followLog) {
      this.followLog();
    }
  }

  request() {
    const { url } = this.state;

    if (!url) {
      return this.setState({ error: true });
    }

    const worker = new ChunkWorker();
    const handler = (e) => {
      const data = JSON.parse(e.data);

      switch (data.type) {
        case 'update':
          return this.handleContainerUpdate(data);
        case 'loadend':
          return worker.removeEventListener('message', handler);
        case 'error':
          worker.removeEventListener('message', handler);
          return this.setState({ error: true });
      }
    };

    worker.addEventListener('message', handler);
    worker.postMessage(JSON.stringify({ type: 'start', url }));

    this.setState({ worker });
  }

  handleMessage(e) {
    if (e.data && typeof e.data === 'object') {
      this.setState(e.data);
    }
  }

  handleContainerUpdate({ offset, chunkHeights, minLineHeight }) {
    this.setState({ offset, chunkHeights, minLineHeight, isLoading: false });
  }

  handleDelegation(event) {
    if (event.target.tagName === 'A') {
      event.stopPropagation();
      this.highlight(event.target, event.shiftKey);
    } else if (this.state.toolbarOpen) {
      this.toggleToolbar(false);
    }
  }

  search(_pattern, buffer = this.state.container) {
    const pattern = typeof _pattern === 'string' ?
      Array.from(ENCODER.encode(_pattern)) :
      _pattern;

    return bufferSearch(pattern, buffer);
  }

  toggle(stateProp, value) {
    value != null && value !== this.state[stateProp] ?
      this.setState({ [stateProp]: value }) :
      this.setState({ [stateProp]: !this.state[stateProp] });
  }

  toggleToolbar(open) {
    this.toggle('toolbarOpen', typeof open === 'boolean' ? open : null);
  }

  toggleLineNumbers() {
    this.toggle('showLineNumbers');
  }

  toggleWrapLines() {
    this.toggle('wrapLines');
  }

  toggleFollowLog(value) {
    this.toggle('followLog', value);
  }

  highlight(anchor, isMultiple) {
    const lineNumber = parseInt(anchor.getAttribute('id'));
    const { highlightStart } = this.state;

    if (lineNumber === highlightStart) {
      this.setState({ highlightStart: null, highlightEnd: null });
    } else if (!isMultiple || !highlightStart) {
      this.setState({ highlightStart: lineNumber, highlightEnd: lineNumber });
    } else if (lineNumber > highlightStart) {
      this.setState({ highlightEnd: lineNumber });
    } else {
      this.setState({ highlightStart: lineNumber });
    }
  }

  renderChunk(height, index, shouldLoad) {
    const load = shouldLoad(index);
    const { worker, highlightStart, highlightEnd } = this.state;

    return (
      <LazyItem key={index} load={load} style={{ minHeight: height }}>
        {() => {
          return new Promise((resolve) => {
            const handler = (e) => {
              const data = JSON.parse(e.data);

              if (data.type === 'decoded-index' && data.index === index) {
                worker.removeEventListener('message', handler);
                resolve(data.html);
              }
            };

            worker.addEventListener('message', handler);
            worker.postMessage(JSON.stringify({
              index,
              type: 'decode-index',
              metadata: { highlightStart, highlightEnd }
            }));
          });
        }}
      </LazyItem>
    );
  }

  renderChunks() {
    return (
      <LazyList list={this.state.chunkHeights} buffer={2}>
        {(heights, shouldLoad) => heights.map((height, index) => this.renderChunk(height, index, shouldLoad))}
      </LazyList>
    );
  }

  followLog() {
    const interval = setInterval(() => {
      if (!this.state.followLog) {
        return stop();
      }

      const height = (html.scrollHeight || body.scrollHeight) - html.clientHeight;
      const scrollTop = html.scrollTop || body.scrollTop;
      const bottom = scrollTop + height;

      if (bottom > 0) {
        window.scrollTo(0, height);
      }
    }, 300);

    const scrollHandler = throttle(() => {
      const scrollTop = html.scrollTop || body.scrollTop;

      if (scrollTop < position) {
        stop();
      }

      position = scrollTop;
    }, 200);

    const stop = () => {
      window.removeEventListener('scroll', scrollHandler);
      clearInterval(interval);

      if (this.state.followLog) {
        this.toggleFollowLog(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);
  }

  jumpToLine(lineNumber) {
    const { minLineHeight, offset } = this.state;

    window.scrollTo(0, (lineNumber - offset) * minLineHeight + minLineHeight);
    this.setState({ didLineJump: true });
  }

  jumpToQueriedLine(lineNumber) {
    const interval = setInterval(() => {
      if (this.state.minLineHeight) {
        this.jumpToLine(lineNumber);
        clearInterval(interval);
      }
    }, 1000);
  }

  render() {
    const { isLoading, error, toolbarOpen, showLineNumbers, wrapLines, followLog } = this.state;

    if (error) {
      return (
        <div className="error">
          <h1 className="loading">
            <Warning /> An error occurred while trying to load the specified log. It may not exist,
            or may not have any content.
          </h1>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div>
          <h1 className="loading">
            <Spinner /> Loading...
          </h1>
        </div>
      );
    }

    let className = 'ansi';

    if (showLineNumbers) {
      className += ' show-line-numbers';
    }

    if (wrapLines) {
      className += ' wrap-lines';
    }

    return (
      <div>
        {this.state.customStyle && <Helmet style={[{ cssText: this.state.customStyle }]} />}

        <div id="log-container">
          <code id="log" className={className} onClick={e => this.handleDelegation(e)}>
            {this.renderChunks()}
          </code>
        </div>

        <div id="toolbar" className={toolbarOpen ? 'open' : ''}>
          <div className="cog-wrapper" onClick={() => this.toggleToolbar()}>
            <Cog className="cog" width={20} height={20} />
            <header>Settings</header>
          </div>

          <menu onClick={e => e.stopPropagation()}>
            <ul>
              <li><input type="checkbox" checked={followLog} onChange={() => this.toggleFollowLog()} /> Follow Log</li>
              <li><input type="checkbox" checked={showLineNumbers} onChange={() => this.toggleLineNumbers()} /> Show Line Numbers</li>
              <li><input type="checkbox" checked={wrapLines} onChange={() => this.toggleWrapLines()} /> Wrap Lines</li>
            </ul>
          </menu>
        </div>
      </div>
    )
  }
}

LogViewer.displayName = 'LogViewer';

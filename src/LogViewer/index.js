import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { parse, stringify } from 'querystring';
import LazyList from '../LazyList';
import LazyItem from '../LazyItem';
import Spinner from '../Spinner';
import Warning from '../Warning';
import Cog from '../Cog';
import bufferSearch from '../util/buffer-search';
import ChunkWorker from 'worker!./chunk-worker';

const ENCODER = new TextEncoder('utf-8');

export default class LogViewer extends React.Component {
  constructor(props) {
    super(props);

    const qs = parse(location.search.substr(1));

    this.state = {
      ...qs,
      wrapLines: qs.wrapLines === 'true',
      showLineNumbers: qs.showLineNumbers !== 'false',
      isLoading: true,
      chunkHeights: [],
      offset: 0,
      minLineHeight: 0,
      error: false,
      toolbarOpen: false,
    };

    this.handleMessage = ::this.handleMessage;
    this.handleContainerUpdate = ::this.handleContainerUpdate;
    this.handleDelegation = ::this.handleDelegation;
    this.toggle = ::this.toggle;
    this.toggleToolbar = ::this.toggleToolbar;
    this.toggleWrapLines = ::this.toggleWrapLines;
    this.toggleLineNumbers = ::this.toggleLineNumbers;
    this.renderChunks = ::this.renderChunks;
    this.renderChunk = ::this.renderChunk;
  }

  componentWillMount() {
    window.addEventListener('message', this.handleMessage);
  }

  componentWillUpdate(nextProps, nextState = this.state) {
    const qs = stringify({
      url: nextState.url,
      highlightStart: nextState.highlightStart,
      highlightEnd: nextState.highlightEnd,
      lineNumber: nextState.lineNumber,
      wrapLines: nextState.wrapLines,
      showLineNumbers: nextState.showLineNumbers
    });

    history.pushState(null, '', `${location.origin}${location.pathname}?${qs}`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidMount() {
    const { lineNumber } = this.state;

    this.request() || (lineNumber && this.jumpToQueriedLine(lineNumber));
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
      }
    };

    worker.addEventListener('message', handler);
    worker.postMessage(JSON.stringify({ type: 'start', url }));

    this.setState({ worker });
  }

  handleMessage(e) {
    if (e.data && typeof e.data === 'object') {
      this.setState({ data: e.data });
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

  jumpToLine(lineNumber) {
    const { minLineHeight, offset } = this.state;

    window.scrollTo(0, (lineNumber - offset) * minLineHeight + minLineHeight);
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
    const { isLoading, error, toolbarOpen, showLineNumbers, wrapLines } = this.state;

    if (error) {
      return (
        <div className="error">
          <h1 className="loading">
            <Warning /> An error occurred while trying to load the specified log.
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
        <div id="log-container">
          <code id="log" className={className} onClick={this.handleDelegation}>
            {this.renderChunks()}
          </code>
        </div>

        <div id="toolbar" className={toolbarOpen ? 'open' : ''}>
          <div className="cog-wrapper" onClick={this.toggleToolbar}>
            <Cog className="cog" width={20} height={20} />
            <header>Settings</header>
          </div>

          <menu onClick={e => e.stopPropagation()}>
            <ul>
              <li><input type="checkbox" checked={showLineNumbers} onChange={this.toggleLineNumbers} /> Show Line Numbers</li>
              <li><input type="checkbox" checked={wrapLines} onChange={this.toggleWrapLines} /> Wrap Lines</li>
            </ul>
          </menu>
        </div>
      </div>
    )
  }
}

LogViewer.displayName = 'LogViewer';

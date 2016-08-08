import React from 'react';
import { List } from 'immutable';
import Waypoint from 'react-waypoint';
import shallowCompare from 'react-addons-shallow-compare';
import querystring from 'querystring';
import parse from './vendor/ansi-parse';
import Cog from './Cog';
import Spinner from './Spinner';

const BLOCK = 1024 * 64;
const CLEAR_ANSI = /(?:\033)(?:\[0?c|\[[0356]n|\[7[lh]|\[\?25[lh]|\(B|H|\[(?:\d+(;\d+){,2})?G|\[(?:[12])?[JK]|[DM]|\[0K)/gm;
const DECODER = new TextDecoder('utf-8');

export default React.createClass({
  displayName: 'LogViewer',

  // Very hackish, but improves performance by not performing DOM lookup to find rendered indices,
  // so track this as chunks are rendered
  lineOffset: 0,

  getInitialState() {
    return {
      url: '',
      isLoading: true,
      chunks: List(),
      nextChunk: 0,
      chunkPartial: null,
      container: null,
      totalChunks: 1,
      error: false,
      toolbarOpen: false,
      showLineNumbers: true,
      wrapLines: true,
      highlightStart: null,
      highlightEnd: null
    };
  },

  componentWillMount() {
    const {
      url,
      highlightStart = null,
      highlightEnd = null,
      wrapLines = true,
      showLineNumbers = true
    } = querystring.parse(location.search.substr(1));

    this.setState({
      url,
      wrapLines,
      highlightStart,
      highlightEnd,
      showLineNumbers
    });

    window.addEventListener('message', (e) => e.data && typeof e.data === 'object' && this.setState(e.data));
  },

  componentWillUpdate(nextProps, nextState) {
    const qs = querystring.stringify({
      url: nextState.url,
      highlightStart: nextState.highlightStart,
      highlightEnd: nextState.highlightEnd,
      wrapLines: nextState.wrapLines,
      showLineNumbers: nextState.showLineNumbers
    });

    history.pushState(null, '', `${location.origin}${location.pathname}?${qs}`);
  },

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  },

  componentDidMount() {
    this.request();
  },

  request() {
    const { url } = this.state;

    if (!url) {
      return this.setState({ error: true });
    }

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.overrideMimeType('text/plain; charset=utf-8');
    xhr.responseType = 'arraybuffer';

    xhr.addEventListener('error', () => {
      this.setState({ error: true });
    });

    xhr.addEventListener('load', () => {
      const container = new Uint8Array(xhr.response);

      this.setState({
        container,
        isLoading: false,
        totalChunks: Math.ceil(container.length / BLOCK)
      });
    });

    xhr.send();
  },

  decodeParts(slice) {
    return DECODER
      .decode(new DataView(slice.buffer))
      .replace(/\033\[1000D/gm, '\r')
      .replace(/\r+\n/gm, '\n')
      .split(/^/gm);
  },

  cleanChunk(chunk) {
    return chunk.map(string => parse(string.replace(CLEAR_ANSI, '')))
  },

  addChunk() {
    const index = this.state.nextChunk;
    const start = index * BLOCK;
    const end = Math.min((index + 1) * BLOCK, this.state.container.length);
    const slice = this.state.container.slice(start, end);
    const chunk = this.decodeParts(slice);

    if (this.state.chunkPartial) {
      chunk[0] = this.state.chunkPartial + chunk[0];
    }

    if (this.state.totalChunks === index + 1) {
      const parts = this.cleanChunk(chunk);

      return this.setState({
        fullyLoaded: true,
        chunks: this.state.chunks.push(parts)
      });
    }

    const chunkPartial = chunk.pop();
    const parts = this.cleanChunk(chunk);

    this.setState({
      chunkPartial,
      nextChunk: Math.min(this.state.nextChunk + 1, this.state.totalChunks - 1),
      chunks: this.state.chunks.push(parts)
    });
  },

  getClassName(part) {
    const colors = [];

    if (part.foreground) {
      colors.push(part.foreground);
    }

    if (part.background) {
      colors.push(`bg-${part.background}`);
    }

    if (part.bold) {
      colors.push('bold');
    }

    if (part.italic) {
      colors.push('italic');
    }

    if (part.underline) {
      colors.push('underline');
    }

    return colors.join(' ');
  },

  renderChunk(chunk, index, chunks) {
    const { highlightStart, highlightEnd } = this.state;
    const offset = index !== 0 ?
      chunks.get(index - 1).length + this.lineOffset :
      1;

    this.lineOffset = offset;

    return chunk
      .map((parts, key) => {
        const line = key + offset;
        const className = line >= highlightStart && line <= highlightEnd ? 'highlight' : '';

        return (
          <p key={key} data-chunk={index} data-line={line} className={className}>
            <a id={line} />
            {parts.map((part, key) => {
              const className = this.getClassName(part);

              return className ?
                <span key={key} className={className}>{part.text}</span> :
                <span key={key}>{part.text}</span>;
            })}
          </p>
        )
      });
  },

  toggleToolbar(e, open) {
    e.stopPropagation();

    if (open != null && open !== this.state.toolbarOpen) {
      return this.setState({ toolbarOpen: open });
    }

    this.setState({ toolbarOpen: !this.state.toolbarOpen });
  },

  toggleLineNumbers() {
    this.setState({ showLineNumbers: !this.state.showLineNumbers });
  },

  toggleWrapLines() {
    this.setState({ wrapLines: !this.state.wrapLines });
  },

  highlight(e) {
    const a = e.target;
    const lineNumber = parseInt(a.getAttribute('id'));
    const { highlightStart } = this.state;

    if (lineNumber === highlightStart) {
      this.setState({ highlightStart: null, highlightEnd: null })
    } else if (!e.shiftKey || !highlightStart) {
      this.setState({
        highlightStart: lineNumber,
        highlightEnd: lineNumber
      });
    } else if (lineNumber > highlightStart) {
      this.setState({ highlightEnd: lineNumber });
    } else {
      this.setState({ highlightStart: lineNumber });
    }
  },

  handleDelegation(e) {
    if (e.target.tagName === 'A') {
      this.highlight(e);
    } else if (this.state.toolbarOpen) {
      this.toggleToolbar(e, false);
    }
  },

  render() {
    const { chunks, isLoading, toolbarOpen, showLineNumbers, wrapLines, fullyLoaded } = this.state;

    if (isLoading) {
      return (
        <div>
          <h1 className="loading">
            <i><Spinner className="spinner" /></i> Loading...
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
            <pre id="log" className={className} onClick={this.handleDelegation}>
              {!isLoading && chunks.map(this.renderChunk)}
              {!isLoading && !fullyLoaded && <Waypoint onEnter={this.addChunk} threshold={0.2} />}
          </pre>
        </div>

        <div id="toolbar" className={toolbarOpen ? 'open' : ''}>
          <div className="cog-wrapper" onClick={this.toggleToolbar}>
            <Cog className="cog" width={20} height={20} />
            <header>Settings</header>
          </div>
          <menu onClick={(e) => e.stopPropagation()}>
            <ul>
              <li><input type="checkbox" checked={showLineNumbers} onChange={this.toggleLineNumbers} /> Show Line Numbers</li>
              <li><input type="checkbox" checked={wrapLines} onChange={this.toggleWrapLines} /> Wrap Lines</li>
            </ul>
          </menu>
        </div>
      </div>
    )
  }
});

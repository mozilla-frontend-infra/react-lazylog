import React from 'react';
import { AutoSizer, InfiniteLoader, List as VirtualList } from 'react-virtualized';
import { List, Range } from 'immutable';
import ansiparse from 'ansiparse';
import { request, stream } from './request';
import { Line } from './Line';
import { Loading } from './Loading';

export class LazyLog extends React.Component {
  constructor(props) {
    super(props);
    this.decoder = new TextDecoder('utf-8');
    this.state = {
      lines: List(),
      decodedLines: List(),
      count: 0,
      offset: 0,
      loaded: false,
      ...this.propsToState(props)
    };
  }

  componentWillMount() {
    [
      'handleUpdate',
      'handleEnd',
      'handleError',
      'handleScroll',
      'renderRow',
      'renderNoRows',
      'isRowLoaded',
      'loadMoreRows'
    ].forEach(method => this[method] = this[method].bind(this));

    const { streaming, url, fetchOptions } = this.props;
    const emitter = streaming ? stream(url, fetchOptions) : request(url, fetchOptions);

    emitter.on('update', this.handleUpdate);
    emitter.on('end', this.handleEnd);
    emitter.on('error', this.handleError);
    emitter.emit('start');
  }

  componentWillReceiveProps(props) {
    this.setState(this.propsToState(props));
  }

  propsToState({ highlight, followUntilScroll, scrollToLine, rowHeight }) {
    const count = this.state ? this.state.count : 0;
    const offset = this.state ? this.state.offset : 0;

    return {
      ...this.getScrollingState(
        scrollToLine,
        this.state && this.state.stopScrolling,
        followUntilScroll,
        count,
        offset
      ),
      following: followUntilScroll,
      highlight: this.getHighlightRange(highlight),
      // Setting a hard limit on lines since browsers have trouble with heights
      // starting at around 16.7 million pixels and up
      lineLimit: Math.floor(16.7 * 1000000 / rowHeight)
    };
  }

  getScrollingState(scrollToLine, stopScrolling, following, count, offset) {
    let scrollToIndex = -1;

    if (stopScrolling) {
      scrollToIndex = -1;
    } else if (following) {
      scrollToIndex = count - 1 - offset;
    } else if (scrollToLine && scrollToLine < count) {
      stopScrolling = true;
      scrollToIndex = scrollToLine - 1 - offset;
    }

    return { scrollToIndex, stopScrolling };
  }

  handleUpdate(moreLines) {
    const { scrollToLine } = this.props;
    const { lineLimit, following } = this.state;
    let offset = 0;
    let lines = this.state.lines.concat(moreLines);
    let count = lines.count();

    if (count > lineLimit) {
      offset = count - lineLimit;
      lines = lines.slice(-lineLimit);
      count = lines.count();
    }

    this.setState({
      lines,
      offset,
      count,
      ...this.getScrollingState(
        scrollToLine,
        this.state.stopScrolling,
        following,
        count,
        offset
      )
    });
  }

  handleScroll({ scrollTop, scrollHeight, clientHeight }) {
    if (scrollHeight - scrollTop !== clientHeight) {
      this.setState({ following: false });
    }
  }

  handleEnd() {
    this.setState({ loaded: true });
  }

  handleError(err) {
    this.setState({ error: err });
  }

  handleHighlight(lineNumber, { shiftKey }) {
    const { highlight } = this.state;
    const start = highlight.first();

    if (start === lineNumber) {
      this.setState({ highlight: this.getHighlightRange(null) });
    } else if (!shiftKey || !start) {
      this.setState({ highlight: this.getHighlightRange(lineNumber) });
    } else if (lineNumber > start) {
      this.setState({ highlight: this.getHighlightRange([start, lineNumber]) });
    } else {
      this.setState({ highlight: this.getHighlightRange([lineNumber, highlight.last()]) });
    }
  }

  getHighlightRange(highlight) {
    if (!highlight) {
      return Range(0, 0);
    }

    if (!Array.isArray(highlight)) {
      return Range(highlight, highlight + 1);
    }

    if (highlight.length === 1) {
      return Range(highlight[0], highlight[0] + 1);
    }

    return Range(highlight[0], highlight[1] + 1);
  }

  decode(value) {
    return ansiparse(this.decoder.decode(value));
  }

  isRowLoaded({ index }) {
    return this.state.decodedLines.has(index);
  }

  loadMoreRows({ startIndex, stopIndex }) {
    return new Promise(resolve => {
      requestAnimationFrame(() => {
        const { decodedLines } = this.state;

        decodedLines.withMutations(decodedLines => {
          this.state.lines.slice(startIndex, stopIndex).forEach((line, index) => {
            decodedLines.set(index, this.decode(line));
          });
        });

        this.setState({ decodedLines }, resolve);
      });
    });
  }

  renderError() {
    const { url } = this.props;
    const { error } = this.state;

    return [
      <Line number="Error" key="error-line-0">
        {[{
          bold: true,
          foreground: 'red',
          text: error.status ?
            `${error.message} (HTTP ${error.status})` :
            error.message || 'Network Error'
        }]}
      </Line>,
      <Line key="error-line-1">
        {[{
          bold: true,
          text: 'An error occurred attempting to load the provided log.'
        }]}
      </Line>,
      <Line key="error-line-2">
        {[{
          bold: true,
          text: 'Please check the URL and ensure it is reachable.'
        }]}
      </Line>,
      <Line key="error-line-3">{[]}</Line>,
      <Line key="error-line-4">
        {[{
          foreground: 'blue',
          text: <a href={url} style={{ color: 'inherit' }}>{url}</a>
        }]}
      </Line>
    ];
  }

  renderRow({ key, index, style }) {
    const number = index + 1 + this.state.offset;

    return (
      <Line
        style={{ lineHeight: `${style.height}px`, ...style }}
        key={key}
        number={number}
        highlight={this.state.highlight.includes(number)}
        onLineNumberClick={this.handleHighlight.bind(this, number)}>
        {this.state.decodedLines.get(index)}
      </Line>
    );
  }

  renderNoRows() {
    const { error, loaded } = this.state;

    if (!error && !loaded) {
      return <Loading />;
    }

    if (loaded) {
      return <Line>{[{ bold: true, text: 'No content' }]}</Line>;
    }

    return this.renderError();
  }

  renderLoader() {
    return (
      <InfiniteLoader isRowLoaded={this.isRowLoaded} loadMoreRows={this.loadMoreRows} rowCount={this.state.count} ref={ref => this.loaderRef = ref}>
        {(loader) => this.renderSizer(loader)}
      </InfiniteLoader>
    );
  }

  renderSizer(loader) {
    return (
      <AutoSizer>
        {size => this.renderList({ ...size, ...loader })}
      </AutoSizer>
    );
  }

  renderList({ height, width, onRowsRendered, registerChild }) {
    const { props } = this;
    const { count, following, scrollToAlignment, scrollToIndex } = this.state;

    return (
      <VirtualList
        ref={registerChild}
        onRowsRendered={onRowsRendered}
        height={height}
        width={width}
        rowCount={count}
        scrollToAlignment={scrollToAlignment}
        rowRenderer={this.renderRow}
        noRowsRenderer={this.renderNoRows}
        onScroll={following && count ? this.handleScroll : undefined}
        {...props}
        scrollToIndex={scrollToIndex || props.scrollToLine}
      />
    );
  }

  render() {
    return this.renderLoader();
  }
}

LazyLog.defaultProps = {
  followUntilScroll: false,
  scrollToLine: 0,
  highlight: null,
  rowHeight: 19,
  containerStyle: {
    overflowX: 'scroll'
  },
  style: {
    fontFamily: 'Monaco, monospace',
    fontSize: 12,
    margin: 0,
    whiteSpace: 'pre',
    wordWrap: 'break-word',
    backgroundColor: '#222222',
    color: '#d6d6d6',
    fontWeight: 400
  }
};

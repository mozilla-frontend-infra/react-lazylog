import React from 'react';
import { AutoSizer, List as VirtualList } from 'react-virtualized';
import { List, Range } from 'immutable';
import ansiparse from 'ansiparse';
import { request, stream } from './request';
import { Line } from './Line';
import { Loading } from './Loading';
import { lazyLog } from './styles.css';

export class LazyLog extends React.PureComponent {
  constructor(props) {
    super(props);
    this.decoder = new TextDecoder('utf-8');
    this.state = {
      lines: List(),
      count: 0,
      offset: 0,
      loaded: false,
      error: null,
      ...this.propsToState(props)
    };
  }

  componentWillMount() {
    [
      'handleUpdate',
      'handleEnd',
      'handleError',
      'handleScroll',
      'renderRow'
    ].map(method => this[method] = this[method].bind(this));

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
    return {
      ...this.getScrollingState(
        scrollToLine,
        this.state && this.state.stopScrolling,
        followUntilScroll,
        this.state ? this.state.count : 0,
        this.state ? this.state.offset : 0
      ),
      following: followUntilScroll,
      highlight: this.getHighlightRange(highlight),
      // Setting a hard limit on lines since browsers have trouble with heights
      // starting at around 16.7 million pixels and up
      lineLimit: Math.floor(16.7 * 1000000 / rowHeight)
    };
  }

  getScrollingState(scrollToLine, stopScrolling, following, count, offset) {
    if (stopScrolling) {
      return { scrollToIndex: -1, stopScrolling };
    } else if (following) {
      return { scrollToIndex: count - 1 - offset, stopScrolling };
    } else if (scrollToLine && scrollToLine < count) {
      return { scrollToIndex: scrollToLine - 1 - offset, stopScrolling: true };
    }

    return { scrollToIndex: -1, stopScrolling };
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
        rowHeight={this.props.rowHeight}
        style={style}
        key={key}
        number={number}
        highlight={this.state.highlight.includes(number)}
        onLineNumberClick={this.handleHighlight.bind(this, number)}>
        {this.decode(this.state.lines.get(index))}
      </Line>
    );
  }

  renderNoRows() {
    if (this.state.error) {
      return this.renderError();
    }

    if (this.state.loaded) {
      return <Line>{[{ bold: true, text: 'No content' }]}</Line>;
    }

    return <Loading />;
  }

  render() {
    return (
      <AutoSizer>
        {({ height, width }) => (
          <VirtualList
            className={lazyLog}
            overscanRowCount={100}
            height={height}
            width={width}
            rowCount={this.state.count}
            scrollToAlignment={this.state.scrollToAlignment}
            rowRenderer={this.renderRow}
            noRowsRenderer={() => this.renderNoRows()}
            onScroll={this.state.following && this.state.count ? this.handleScroll : undefined}
            {...this.props}
            scrollToIndex={this.state.scrollToIndex ||this.props.scrollToLine}
          />
        )}
      </AutoSizer>
    );
  }
}

LazyLog.defaultProps = {
  followUntilScroll: false,
  scrollToLine: 0,
  highlight: null,
  rowHeight: 19,
  containerStyle: {
    width: 'auto',
    maxWidth: 'initial',
    overflowX: 'visible'
  },
  style: null
};

import { Component, Fragment } from 'react';
import {
  arrayOf,
  bool,
  func,
  number,
  object,
  oneOfType,
  string,
} from 'prop-types';
import { AutoSizer, List as VirtualList } from 'react-virtualized';
import { List } from 'immutable';
import ansiparse from '../../ansiparse';
import decode from '../../encoding';
import { getScrollIndex, getHighlightRange } from '../../utils';
import Line from '../Line';
import Loading from '../Loading';
import request from '../../request';
import stream from '../../stream';
import { lazyLog } from './index.module.css';

// Setting a hard limit on lines since browsers have trouble with heights
// starting at around 16.7 million pixels and up
const BROWSER_PIXEL_LIMIT = 16.7 * 1000000;

export default class LazyLog extends Component {
  static propTypes = {
    /**
     * The URL from which to fetch content. Subject to same-origin policy,
     * so must be accessible via fetch on same domain or via CORS.
     */
    url: string.isRequired,
    /**
     * Options object which will be passed through to the `fetch` request.
     * Defaults to `{ credentials: 'omit' }`.
     */
    fetchOptions: object,
    /**
     * Set to `true` to specify remote URL will be streaming chunked data.
     * Defaults to `false` to download data until completion.
     */
    stream: bool,
    /**
     * Set the height in pixels for the component.
     * Defaults to `'auto'` if unspecified. When the `height` is `'auto'`,
     * the component will expand vertically to fill its container.
     */
    height: oneOfType([number, string]),
    /**
     * Set the width in pixels for the component.
     * Defaults to `'auto'` if unspecified.
     * When the `width` is `'auto'`, the component will expand
     * horizontally to fill its container.
     */
    width: oneOfType([number, string]),
    /**
     * Scroll to the end of the component after each update to the content.
     * Cannot be used in combination with `scrollToLine`.
     */
    follow: bool,
    /**
     * Scroll to a particular line number once it has loaded.
     * This is 1-indexed, i.e. line numbers start at `1`.
     * Cannot be used in combination with `follow`.
     */
    scrollToLine: number,
    /**
     * Line number (e.g. `highlight={10}`) or line number range to highlight
     * inclusively (e.g. `highlight={[5, 10]}` highlights lines 5-10).
     * This is 1-indexed, i.e. line numbers start at `1`.
     */
    highlight: oneOfType([number, arrayOf([number, number])]),
    /**
     * Make the text selectable, allowing to copy & paste. Defaults to `false`.
     */
    selectableLines: bool,
    /**
     * Execute a function against each string part of a line,
     * returning a new line part. Is passed a single argument which is
     * the string part to manipulate, should return a new string
     * with the manipulation completed.
     */
    formatPart: func,
    /**
     * Execute a function if/when the provided `url` has completed loading.
     */
    onLoad: func,
    /**
     * Execute a function if the provided `url` has encountered an error
     * during loading.
     */
    onError: func,
    /**
     * Execute a function when the highlighted range has changed.
     * Is passed a single argument which is an `Immutable.Range`
     * of the highlighted line numbers.
     */
    onHighlight: func,
    /**
     * A fixed row height in pixels. Controls how tall a line is,
     * as well as the `lineHeight` style of the line's text.
     * Defaults to `19`.
     */
    rowHeight: number,
    /**
     * Number of rows to render above/below the visible bounds of the list.
     * This can help reduce flickering during scrolling on
     * certain browsers/devices. Defaults to `100`.
     */
    overscanRowCount: number,
    /**
     * Optional custom inline style to attach to element which contains
     * the interior scrolling container.
     */
    containerStyle: object,
    /**
     * Optional custom inline style to attach to root
     * virtual `LazyList` element.
     */
    style: object,
  };

  static defaultProps = {
    stream: false,
    height: 'auto',
    width: 'auto',
    follow: false,
    scrollToLine: 0,
    highlight: null,
    selectableLines: false,
    rowHeight: 19,
    overscanRowCount: 100,
    containerStyle: {
      width: 'auto',
      maxWidth: 'initial',
      overflowX: 'scroll',
    },
    style: {},
    onError: null,
    onHighlight: null,
    onLoad: null,
    formatPart: null,
    fetchOptions: { credentials: 'omit' },
  };

  static getDerivedStateFromProps(
    { highlight, follow, scrollToLine, rowHeight, url },
    { count, offset, lines, loaded, error }
  ) {
    return {
      scrollToIndex: getScrollIndex({
        follow,
        scrollToLine,
        count,
        offset,
      }),
      highlight: getHighlightRange(highlight),
      lineLimit: Math.floor(BROWSER_PIXEL_LIMIT / rowHeight),
      lines: url ? List() : lines,
      count: url ? 0 : count,
      offset: url ? 0 : offset,
      loaded: url ? false : loaded,
      error: url ? null : error,
    };
  }

  state = {};

  componentDidMount() {
    this.request();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.url !== this.props.url) {
      this.request();
    }

    if (prevState.loaded !== this.state.loaded && this.props.onLoad) {
      this.props.onLoad();
    } else if (this.state.error && this.props.onError) {
      this.props.onError(this.state.error);
    }

    if (
      prevProps.highlight !== this.props.highlight &&
      this.props.onHighlight
    ) {
      this.props.onHighlight(this.state.highlight);
    }
  }

  componentWillUnmount() {
    this.endRequest();
  }

  request() {
    const { url, fetchOptions, stream: isStream } = this.props;

    this.endRequest();
    this.emitter = isStream
      ? stream(url, fetchOptions)
      : request(url, fetchOptions);
    this.emitter.on('update', this.handleUpdate);
    this.emitter.on('end', this.handleEnd);
    this.emitter.on('error', this.handleError);
    this.emitter.emit('start');
  }

  endRequest() {
    if (this.emitter) {
      this.emitter.emit('abort');
      this.emitter.off('update', this.handleUpdate);
      this.emitter.off('end', this.handleEnd);
      this.emitter.off('error', this.handleError);
      this.emitter = null;
    }
  }

  handleUpdate = moreLines => {
    const { scrollToLine, follow } = this.props;
    const { lineLimit, count: previousCount } = this.state;
    let offset = 0;
    let lines = this.state.lines.concat(moreLines);
    let count = lines.count();

    if (count > lineLimit) {
      offset = count - lineLimit;
      lines = lines.slice(-lineLimit);
      count = lines.count();
    }

    const scrollToIndex = getScrollIndex({
      follow,
      scrollToLine,
      previousCount,
      count,
      offset,
    });

    this.setState({
      lines,
      offset,
      count,
      scrollToIndex,
    });
  };

  handleEnd = () => {
    this.setState({ loaded: true });

    if (this.props.onLoad) {
      this.props.onLoad();
    }
  };

  handleError = err => {
    this.setState({ error: err });

    if (this.props.onError) {
      this.props.onError(err);
    }
  };

  handleHighlight = lineNumber => ({ shiftKey }) => {
    const first = this.state.highlight.first();
    const last = this.state.highlight.last();
    let range;

    if (first === lineNumber) {
      range = null;
    } else if (!shiftKey || !first) {
      range = lineNumber;
    } else if (lineNumber > first) {
      range = [first, lineNumber];
    } else {
      range = [lineNumber, last];
    }

    const highlight = getHighlightRange(range);

    this.setState({ highlight }, () => {
      if (this.props.onHighlight) {
        this.props.onHighlight(highlight);
      }
    });
  };

  renderError() {
    const { url } = this.props;
    const { error } = this.state;

    return (
      <Fragment>
        <Line
          number="Error"
          key="error-line-0"
          data={[
            {
              bold: true,
              foreground: 'red',
              text: error.status
                ? `${error.message} (HTTP ${error.status})`
                : error.message || 'Network Error',
            },
          ]}
        />
        <Line
          key="error-line-1"
          data={[
            {
              bold: true,
              text: 'An error occurred attempting to load the provided log.',
            },
          ]}
        />
        <Line
          key="error-line-2"
          data={[
            {
              bold: true,
              text: 'Please check the URL and ensure it is reachable.',
            },
          ]}
        />
        <Line key="error-line-3" data={[]} />
        <Line
          key="error-line-4"
          data={[
            {
              foreground: 'blue',
              text: (
                <a href={url} style={{ color: 'inherit' }}>
                  {url}
                </a>
              ),
            },
          ]}
        />
      </Fragment>
    );
  }

  renderRow = ({ key, index, style }) => {
    const { rowHeight, formatPart, selectableLines } = this.props;
    const { highlight, lines, offset } = this.state;
    const number = index + 1 + offset;

    return (
      <Line
        rowHeight={rowHeight}
        style={style}
        key={key}
        number={number}
        formatPart={formatPart}
        selectable={selectableLines}
        highlight={highlight.includes(number)}
        onLineNumberClick={this.handleHighlight(number)}
        data={ansiparse(decode(lines.get(index)))}
      />
    );
  };

  renderNoRows = () => {
    const { error, loaded } = this.state;

    if (error) {
      return this.renderError();
    }

    if (loaded) {
      return <Line data={[{ bold: true, text: 'No content' }]} />;
    }

    return <Loading />;
  };

  render() {
    return (
      <AutoSizer
        disableHeight={this.props.height !== 'auto'}
        disableWidth={this.props.width !== 'auto'}>
        {({ height, width }) => (
          <VirtualList
            className={`react-lazylog ${lazyLog}`}
            rowCount={this.state.count}
            rowRenderer={row => this.renderRow(row)}
            noRowsRenderer={this.renderNoRows}
            {...this.props}
            height={this.props.height === 'auto' ? height : this.props.height}
            width={this.props.width === 'auto' ? width : this.props.width}
            scrollToIndex={this.state.scrollToIndex || this.props.scrollToIndex}
          />
        )}
      </AutoSizer>
    );
  }
}

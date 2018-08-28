import { Component, Fragment } from 'react';
import { any, arrayOf, bool, func, number, object, oneOfType, string } from 'prop-types';
import { AutoSizer, List as VirtualList } from 'react-virtualized';
import { equals } from 'ramda';
import { List } from 'immutable';
import cn from 'classnames';
import mitt from 'mitt';
import ansiparse from '../../ansiparse';
import { decode, encode } from '../../encoding';
import { getScrollIndex, getHighlightRange } from '../../utils';
import Line from '../DocumentLine';
import Loading from '../Loading';
import request from '../../request';
import stream from '../../stream';
import { lazyLog } from './index.module.css';

const pxToNum = px => {
  return typeof px === 'string' ? parseInt(px.replace('px', ''), 10) : px;
};
// Setting a hard limit on lines since browsers have trouble with heights
// starting at around 16.7 million pixels and up
const BROWSER_PIXEL_LIMIT = 16.7 * 1000000;

export default class DocumentViewer extends Component {
  static propTypes = {
    /**
     * The URL from which to fetch content. Subject to same-origin policy,
     * so must be accessible via fetch on same domain or via CORS.
     */
    url: string,
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
    highlight: oneOfType([number, arrayOf(number)]),
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
    /**
     * Specify an alternate component to use when loading.
     */
    loadingComponent: any,
    /**
     * Specify an additional className to append to lines.
     */
    lineClassName: string,
    /**
     * Specify an additional className to append to highlighted lines.
     */
    highlightLineClassName: string,
    /**
     * The array of searches to be performed
     */
    search: arrayOf(object),
    /**
     * Function that all of lines and search array will be passed to
     * Should return a promise
     */
    highlighter: func,
    /**
     * Renders any extra content
     * Can be used to render DocumentMinimap
     */
    extraContentRender: func,
    /**
     * Background color of the text container
     */
    backgroundColor: string,
    /**
     * Color of the regular, unmarked text
     */
    color: string,
    /**
     * Optional classname added to the container
     */
    className: string,
    /**
     * Alternative to retrieving data from http.
     * Allows to customise the text input that will be displayed.
     * MUST return an emmiter and emmit encoded text.
     * encode function will be passed as a first argument
     * emitter creation function will be passed as a second argument
     */
    textEmitter: func,
    /**
     * Allows to inject raw text at once, to improve large text performance
     */
    rawText: arrayOf(string),
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
    loadingComponent: Loading,
    lineClassName: '',
    highlightLineClassName: '',
    extraContentRender: null,
    backgroundColor: '#fff',
    color: '#000',
    className: '',
    url: '',
    textEmmiter: undefined,
  };

  static getDerivedStateFromProps(
    { highlight, follow, scrollToLine, rowHeight, url: nextUrl },
    { count, offset, url: previousUrl, highlight: previousHighlight, lines }
  ) {
    return {
      scrollToIndex: getScrollIndex({
        follow,
        scrollToLine,
        count,
        offset,
      }),
      lineLimit: Math.floor(BROWSER_PIXEL_LIMIT / rowHeight),
      highlight: highlight
        ? getHighlightRange(highlight)
        : previousHighlight || getHighlightRange(previousHighlight),
    };
  }

  state = {
    lines: List(),
    count: 0,
    offset: 0,
    loaded: false,
    error: null,
    parsedLines: [],
  };

  componentDidMount() {
    this.request();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.url !== this.props.url || prevState.url !== this.state.url) {
      this.request();
    }

    if (!this.state.loaded && prevState.loaded !== this.state.loaded && this.props.onLoad) {
      this.props.onLoad();
    } else if (this.state.error && prevState.error !== this.state.error && this.props.onError) {
      this.props.onError(this.state.error);
    }

    if (
      this.props.highlight &&
      prevProps.highlight !== this.props.highlight &&
      this.props.onHighlight
    ) {
      this.props.onHighlight(this.state.highlight);
    }
    if (!equals(prevProps.search, this.props.search)) {
      this.setState({ loaded: false }, () => this.handleEnd());
    }
  }

  componentWillUnmount() {
    this.endRequest();
  }

  request() {
    const { url, fetchOptions, stream: isStream, textEmitter, rawText } = this.props;

    this.endRequest();
    if (textEmitter) {
      this.emitter = textEmitter(encode, mitt);
    } else if (rawText) {
      this.emitter = this.injectRaw(rawText);
    } else {
      this.emitter = isStream ? stream(url, fetchOptions) : request(url, fetchOptions);
    }
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

  injectRaw(text) {
    const emitter = mitt();
    emitter.on('start', () => {
      this.setState(
        (prevState, props) => {
          const { scrollToLine, follow } = props;
          const { lineLimit, count: previousCount } = prevState;
          const offset = 0;
          const lines = List().withMutations(lines => {
            let index = 0;
            while (index < text.length) {
              lines.push(encode(text[index]));
              index += 1;
            }
          });
          const count = lines.count();
          const scrollToIndex = getScrollIndex({
            follow,
            scrollToLine,
            previousCount,
            count,
            offset,
          });

          return {
            lines,
            offset,
            count,
            scrollToIndex,
          };
        },
        () => emitter.emit('end')
      );
    });
    return emitter;
  }

  handleUpdate = moreLines =>
    this.setState((prevState, props) => {
      const { scrollToLine, follow } = props;
      const { lineLimit, count: previousCount } = prevState;
      let offset = 0;
      let lines = prevState.lines.concat(moreLines);
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

      return {
        lines,
        offset,
        count,
        scrollToIndex,
      };
    });

  handleEnd = () => {
    const { search, highlighter, onLoad } = this.props;

    if (highlighter) {
      highlighter(this.state.lines, search).then(({ lines }) => {
        this.setState({ loaded: true, parsedLines: lines }, () => {
          if (onLoad) {
            onLoad();
          }
        });
      });
    } else {
      // Need to have a callback here, else if the data is received too fast, it will not schedule properly
      this.setState((prevState, props) => {
        return {
          parsedLines: prevState.lines.toArray().map(row => [decode(row)]),
          loaded: true,
        };
      });
    }
  };

  handleError = err => {
    this.setState({ error: err });

    if (this.props.onError) {
      this.props.onError(err);
    }
  };

  handleHighlight = e => {
    if (!e.target.id) {
      return;
    }

    const lineNumber = +e.target.id;

    if (!lineNumber) {
      return;
    }

    const first = this.state.highlight.first();
    const last = this.state.highlight.last();
    let range;

    if (first === lineNumber) {
      range = null;
    } else if (!e.shiftKey || !first) {
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
    const { url, lineClassName, highlightLineClassName } = this.props;
    const { error } = this.state;

    return (
      <Fragment>
        <Line
          className={lineClassName}
          highlightClassName={highlightLineClassName}
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
          className={lineClassName}
          highlightClassName={highlightLineClassName}
          data={[
            {
              bold: true,
              text: 'An error occurred attempting to load the provided log.',
            },
          ]}
        />
        <Line
          key="error-line-2"
          className={lineClassName}
          highlightClassName={highlightLineClassName}
          data={[
            {
              bold: true,
              text: 'Please check the URL and ensure it is reachable.',
            },
          ]}
        />
        <Line
          key="error-line-3"
          className={lineClassName}
          highlightClassName={highlightLineClassName}
          data={[]}
        />
        <Line
          key="error-line-4"
          className={lineClassName}
          highlightClassName={highlightLineClassName}
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
    const {
      rowHeight,
      formatPart,
      selectableLines,
      lineClassName,
      highlightLineClassName,
    } = this.props;
    const { highlight, parsedLines, offset, loaded } = this.state;
    const number = index + 1 + offset;

    if (!loaded || parsedLines[index] === undefined) {
      return null;
    }

    return (
      <Line
        className={lineClassName}
        highlightClassName={highlightLineClassName}
        rowHeight={rowHeight}
        style={style}
        key={key}
        number={number}
        formatPart={formatPart}
        selectable={selectableLines}
        highlight={highlight.includes(number)}
        onLineNumberClick={this.handleHighlight}
        data={parsedLines[index]}
      />
    );
  };

  renderNoRows = () => {
    const { loadingComponent: Loading, lineClassName, highlightLineClassName } = this.props;
    const { error, loaded } = this.state;

    if (error) {
      return this.renderError();
    }

    if (loaded) {
      return (
        <Line
          className={lineClassName}
          highlightClassName={highlightLineClassName}
          data={[{ bold: true, text: 'No content' }]}
          number={0}
        />
      );
    }

    return <Loading />;
  };

  updateScroll = scrollTop => {
    this.setState({ scrollTop });
  };

  render() {
    const { parsedLines, scrollTop, count } = this.state;
    const {
      extraContentRender,
      rowHeight,
      backgroundColor,
      color,
      className,
      height,
      width,
      ...restProps
    } = this.props;

    const isAutoHeight = height === 'auto';
    const isAutoWidth = width === 'auto';

    return (
      <AutoSizer disableHeight={!isAutoHeight} disableWidth={!isAutoWidth}>
        {({ height: newHeight, width: newWidth }) => {
          const sizes = {
            height: isAutoHeight ? newHeight : pxToNum(height),
            width: isAutoWidth ? newWidth : pxToNum(width),
          };

          let content = null;
          if (extraContentRender && parsedLines && parsedLines.length !== 0) {
            content = extraContentRender({
              sizes,
              lines: parsedLines,
              selector: '.viewer-grid > div',
              rowHeight,
              // Need a better apporach in the future. Maybe use even listener?
              addListener: fn => {
                this.onScroll = fn;
              },
              updateScroll: this.updateScroll,
            });
          }
          return (
            <div style={{ position: 'relative', width: sizes.width, height: sizes.height }}>
              <Fragment>
                {content}
                <VirtualList
                  {...restProps}
                  className={cn(['react-lazylog', 'viewer-grid', lazyLog, className])}
                  style={{ backgroundColor, color }}
                  rowHeight={rowHeight}
                  rowCount={count}
                  rowRenderer={this.renderRow}
                  noRowsRenderer={this.renderNoRows}
                  onScroll={meta => {
                    if (this.onScroll) {
                      this.onScroll(meta);
                    }
                  }}
                  height={sizes.height}
                  width={sizes.width}
                  scrollTop={scrollTop}
                  scrollToIndex={this.state.scrollToIndex || this.props.scrollToIndex}
                />
              </Fragment>
            </div>
          );
        }}
      </AutoSizer>
    );
  }
}

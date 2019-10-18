import { Component, Fragment } from 'react';
import {
  any,
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
import { decode } from '../../encoding';
import {
  SEARCH_BAR_HEIGHT,
  SEARCH_MIN_KEYWORDS,
  getScrollIndex,
  getHighlightRange,
  searchFormatPart,
} from '../../utils';
import Line from '../Line';
import Loading from '../Loading';
import SearchBar from '../SearchBar';
import request from '../../request';
import stream from '../../stream';
import { searchLines } from '../../search';
import { lazyLog, searchMatch } from './index.module.css';

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
    highlight: oneOfType([number, arrayOf(number)]),
    /**
     * Make the text selectable, allowing to copy & paste. Defaults to `false`.
     */
    selectableLines: bool,
    /**
     * Enable the search feature.
     */
    enableSearch: bool,
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
     * Number of extra lines to show at the bottom of the log.
     * Set this to 1 so that Linux users can see the last line
     * of the log output.
     */
    extraLines: number,
    /**
     * Flag to enable/disable case insensitive search
     */
    caseInsensitive: bool,
    /**
     * If provided, the frequency of polling the provided `props.url` in
     * milliseconds
     */
    pollInterval: number,
  };

  static defaultProps = {
    stream: false,
    height: 'auto',
    width: 'auto',
    follow: false,
    scrollToLine: 0,
    highlight: null,
    selectableLines: false,
    enableSearch: false,
    rowHeight: 19,
    overscanRowCount: 100,
    containerStyle: {
      width: 'auto',
      maxWidth: 'initial',
      overflowX: 'scroll',
    },
    style: {},
    extraLines: 0,
    onError: null,
    onHighlight: null,
    onLoad: null,
    formatPart: null,
    fetchOptions: { credentials: 'omit' },
    loadingComponent: Loading,
    lineClassName: '',
    highlightLineClassName: '',
    caseInsensitive: false,
    pollInterval: null,
  };

  static getDerivedStateFromProps(
    { highlight, follow, scrollToLine, rowHeight, url: nextUrl },
    {
      count,
      offset,
      url: previousUrl,
      highlight: previousHighlight,
      isSearching,
      scrollToIndex,
    }
  ) {
    const newScrollToIndex = isSearching
      ? scrollToIndex
      : getScrollIndex({ follow, scrollToLine, count, offset });

    return {
      scrollToIndex: newScrollToIndex,
      lineLimit: Math.floor(BROWSER_PIXEL_LIMIT / rowHeight),
      highlight: highlight
        ? getHighlightRange(highlight)
        : previousHighlight || getHighlightRange(previousHighlight),
      ...(nextUrl && nextUrl !== previousUrl
        ? {
            url: nextUrl,
            lines: List(),
            count: 0,
            offset: 0,
            loaded: false,
            error: null,
          }
        : null),
    };
  }

  state = {
    resultLines: [],
  };

  componentDidMount() {
    this.request();
    this.schedulePoll();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.url !== this.props.url || prevState.url !== this.state.url) {
      this.request();
    }

    if (prevProps.pollInterval !== this.props.pollInterval) {
      this.schedulePoll();
    }

    if (
      !this.state.loaded &&
      prevState.loaded !== this.state.loaded &&
      this.props.onLoad
    ) {
      this.props.onLoad();
    } else if (
      this.state.error &&
      prevState.error !== this.state.error &&
      this.props.onError
    ) {
      this.props.onError(this.state.error);
    }

    if (
      this.props.highlight &&
      prevProps.highlight !== this.props.highlight &&
      this.props.onHighlight
    ) {
      this.props.onHighlight(this.state.highlight);
    }
  }

  componentWillUnmount() {
    this.endRequest();
    this.pollInterval && clearInterval(this.pollInterval);
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

  schedulePoll() {
    if (this.props.pollInterval !== null) {
      this.interval = setInterval(
        this.request.bind(this),
        this.props.pollInterval
      );
    }
  }

  handleUpdate = ({ lines: moreLines, encodedLog }) => {
    this.encodedLog = encodedLog;
    const { scrollToLine, follow, stream } = this.props;
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

    if (stream) {
      this.forceSearch();
    }
  };

  handleEnd = encodedLog => {
    this.encodedLog = encodedLog;
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

  handleHighlight = e => {
    const { onHighlight } = this.props;
    const { isFilteringLinesWithMatches } = this.state;

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
    const state = { highlight };

    if (isFilteringLinesWithMatches) {
      Object.assign(state, {
        scrollToIndex: getScrollIndex({ scrollToLine: lineNumber }),
      });
    }

    this.setState(state, () => {
      if (onHighlight) {
        onHighlight(highlight);
      }

      if (isFilteringLinesWithMatches) {
        this.handleFilterLinesWithMatches(false);
      }
    });
  };

  handleSearch = keywords => {
    const { resultLines, searchKeywords } = this.state;
    const { caseInsensitive, stream } = this.props;
    const currentResultLines =
      !stream && keywords === searchKeywords
        ? resultLines
        : searchLines(keywords, this.encodedLog, caseInsensitive);

    this.setState(
      {
        resultLines: currentResultLines,
        isSearching: true,
        searchKeywords: keywords,
      },
      this.filterLinesWithMatches
    );
  };

  forceSearch = () => {
    const { searchKeywords } = this.state;

    if (searchKeywords && searchKeywords.length > SEARCH_MIN_KEYWORDS) {
      this.handleSearch(this.state.searchKeywords);
    }
  };

  handleClearSearch = () => {
    this.setState({
      isSearching: false,
      searchKeywords: '',
      resultLines: [],
      filteredLines: List(),
      resultLineUniqueIndexes: [],
      isFilteringLinesWithMatches: this.state.isFilteringLinesWithMatches,
      scrollToIndex: 0,
    });
  };

  handleFilterLinesWithMatches = isFilterEnabled => {
    this.setState(
      {
        isFilteringLinesWithMatches: isFilterEnabled,
        filteredLines: List(),
        resultLineUniqueIndexes: [],
      },
      this.filterLinesWithMatches
    );
  };

  filterLinesWithMatches = () => {
    const { resultLines, lines, isFilteringLinesWithMatches } = this.state;

    if (resultLines.length > 0 && isFilteringLinesWithMatches) {
      const resultLineUniqueIndexes = [...new Set(resultLines)];

      this.setState({
        resultLineUniqueIndexes,
        filteredLines: lines.filter((line, index) =>
          resultLineUniqueIndexes.some(
            resultLineIndex => index + 1 === resultLineIndex
          )
        ),
      });
    }
  };

  handleFormatPart = () => {
    const { isSearching, searchKeywords } = this.state;

    if (isSearching) {
      return searchFormatPart({
        searchKeywords,
        formatPart: this.props.formatPart,
        caseInsensitive: this.props.caseInsensitive,
        replaceJsx: (text, key) => (
          <span key={key} className={searchMatch}>
            {text}
          </span>
        ),
      });
    }

    return this.props.formatPart;
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
      selectableLines,
      lineClassName,
      highlightLineClassName,
    } = this.props;
    const {
      highlight,
      lines,
      offset,
      isFilteringLinesWithMatches,
      filteredLines,
      resultLineUniqueIndexes,
    } = this.state;
    const linesToRender = isFilteringLinesWithMatches ? filteredLines : lines;
    const number = isFilteringLinesWithMatches
      ? resultLineUniqueIndexes[index]
      : index + 1 + offset;

    return (
      <Line
        className={lineClassName}
        highlightClassName={highlightLineClassName}
        rowHeight={rowHeight}
        style={style}
        key={key}
        number={number}
        formatPart={this.handleFormatPart()}
        selectable={selectableLines}
        highlight={highlight.includes(number)}
        onLineNumberClick={this.handleHighlight}
        data={ansiparse(decode(linesToRender.get(index)))}
      />
    );
  };

  renderNoRows = () => {
    const {
      loadingComponent: Loading,
      lineClassName,
      highlightLineClassName,
    } = this.props;
    const { error, count, loaded } = this.state;

    if (error) {
      return this.renderError();
    }

    // Handle case where log is empty
    if (!count && loaded) {
      return null;
    }

    // We don't do `if (loaded) {}` in order to handle
    // the edge case where the log is streaming
    if (count) {
      return (
        <Line
          className={lineClassName}
          highlightClassName={highlightLineClassName}
          data={[{ bold: true, text: 'No filter matches' }]}
        />
      );
    }

    return <Loading />;
  };

  calculateListHeight = autoSizerHeight => {
    const { height, enableSearch } = this.props;

    if (enableSearch) {
      return height === 'auto'
        ? autoSizerHeight - SEARCH_BAR_HEIGHT
        : height - SEARCH_BAR_HEIGHT;
    }

    return height === 'auto' ? autoSizerHeight : height;
  };

  render() {
    const { enableSearch } = this.props;
    const {
      resultLines,
      isFilteringLinesWithMatches,
      filteredLines = List(),
      count,
    } = this.state;
    const rowCount = isFilteringLinesWithMatches ? filteredLines.size : count;

    return (
      <Fragment>
        {enableSearch && (
          <SearchBar
            filterActive={isFilteringLinesWithMatches}
            onSearch={this.handleSearch}
            onClearSearch={this.handleClearSearch}
            onFilterLinesWithMatches={this.handleFilterLinesWithMatches}
            resultsCount={resultLines.length}
            disabled={count === 0}
          />
        )}
        <AutoSizer
          disableHeight={this.props.height !== 'auto'}
          disableWidth={this.props.width !== 'auto'}>
          {({ height, width }) => (
            <VirtualList
              className={`react-lazylog ${lazyLog}`}
              rowCount={
                rowCount === 0 ? rowCount : rowCount + this.props.extraLines
              }
              rowRenderer={row => this.renderRow(row)}
              noRowsRenderer={this.renderNoRows}
              {...this.props}
              height={this.calculateListHeight(height)}
              width={this.props.width === 'auto' ? width : this.props.width}
              scrollToIndex={this.state.scrollToIndex}
            />
          )}
        </AutoSizer>
      </Fragment>
    );
  }
}

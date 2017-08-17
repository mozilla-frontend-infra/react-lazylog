import React from 'react';
import { AutoSizer, List as VirtualList } from 'react-virtualized';
import { List } from 'immutable';
import ansiparse from '../../ansiparse';
import { decode } from './encoding';
import { getScrollIndex, getHighlightRange } from './utils';
import { Line } from './Line';
import { Loading } from './Loading';
import { lazyLog } from './styles.css';

export class LazyList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = this.propsToState(props, true);
  }

  componentWillReceiveProps(props) {
    this.setState(this.propsToState(props), () => {
      if (this.state.loaded && this.props.onLoad) {
        this.props.onLoad();
      } else if (this.state.error && this.props.onError) {
        this.props.onError(this.state.error);
      }

      if (props.highlight && this.props.onHighlight) {
        this.props.onHighlight(this.state.highlight);
      }
    });
  }

  propsToState({ highlight, follow, scrollToLine, rowHeight, url }, force = false) {
    const state = {
      scrollToIndex: getScrollIndex({
        follow,
        scrollToLine,
        count: this.state && this.state.count,
        offset: this.state && this.state.offset
      }),
      highlight: getHighlightRange(highlight),
      // Setting a hard limit on lines since browsers have trouble with heights
      // starting at around 16.7 million pixels and up
      lineLimit: Math.floor(16.7 * 1000000 / rowHeight)
    };

    if (force || url !== this.props.url) {
      state.lines = List();
      state.count = 0;
      state.offset = 0;
      state.loaded = false;
      state.error = null;
    }

    return state;
  }

  handleUpdate = (moreLines) => {
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

    const scrollToIndex = getScrollIndex({ follow, scrollToLine, previousCount, count, offset });

    this.setState({
      lines,
      offset,
      count,
      scrollToIndex
    });
  };

  handleEnd = () => {
    this.setState({ loaded: true });

    if (this.props.onLoad) {
      this.props.onLoad();
    }
  };

  handleError = (err) => {
    this.setState({ error: err });

    if (this.props.onError) {
      this.props.onError(err);
    }
  };

  handleHighlight = (lineNumber, { shiftKey }) => {
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

    this.setState({ highlight: getHighlightRange(range) }, () => {
      if (this.props.onHighlight) {
        this.props.onHighlight(this.state.highlight);
      }
    });
  };

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

  renderRow = ({ key, index, style }) => {
    const number = index + 1 + this.state.offset;

    return (
      <Line
        rowHeight={this.props.rowHeight}
        style={style}
        key={key}
        number={number}
        formatPart={this.props.formatPart}
        highlight={this.state.highlight.includes(number)}
        onLineNumberClick={this.handleHighlight.bind(this, number)}>
        {ansiparse(decode(this.state.lines.get(index)))}
      </Line>
    );
  };

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
      <AutoSizer disableHeight={this.props.height !== 'auto'} disableWidth={this.props.width !== 'auto'}>
        {({ height, width }) => (
          <VirtualList
            className={`react-lazylog ${lazyLog}`}
            rowCount={this.state.count}
            rowRenderer={this.renderRow}
            noRowsRenderer={() => this.renderNoRows()}
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

LazyList.defaultProps = {
  height: 'auto',
  width: 'auto',
  follow: false,
  scrollToLine: 0,
  highlight: null,
  rowHeight: 19,
  overscanRowCount: 100,
  containerStyle: {
    width: 'auto',
    maxWidth: 'initial',
    overflowX: 'scroll'
  },
  style: {}
};

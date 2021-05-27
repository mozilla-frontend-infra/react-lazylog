import { Component } from 'react';
import { bool, func, number, object } from 'prop-types';
import { SEARCH_MIN_KEYWORDS } from '../../utils';
import { actionsBar, searchInput, button } from './index.module.css';

export default class ActionsBar extends Component {
  static propTypes = {
    /**
     * Executes a function when the user starts typing.
     */
    onSearch: func,
    /**
     * Executes a function when the search input has been cleared.
     */
    onClearSearch: func,
    /**
     * Executes a function when the option `Filter Lines With Matches`
     * is enable.
     */
    onFilterLinesWithMatches: func,
    /**
     * Number of search results. Should come from the component
     * executing the search algorithm.
     */
    resultsCount: number,
    /**
     * If true, then only lines that match the search term will be displayed.
     */
    filterActive: bool,
    /**
     * If true, the input field and filter button will be disabled.
     */
    disabled: bool,
    /**
     * Optional custom inline style to attach to root element.
     */
    style: object,
  };

  static defaultProps = {
    onSearch: () => {},
    onClearSearch: () => {},
    onFilterLinesWithMatches: () => {},
    resultsCount: 0,
    filterActive: false,
    disabled: false,
  };

  state = {
    keywords: '',
  };

  handleFilterToggle = () => {
    this.props.onFilterLinesWithMatches(!this.props.filterActive);
  };

  handleSearchChange = e => {
    const { value: keywords } = e.target;

    this.setState({ keywords }, () => this.search());
  };

  handleSearchKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleFilterToggle();
    }
  };

  search = () => {
    const { keywords } = this.state;
    const { onSearch, onClearSearch } = this.props;

    if (keywords && keywords.length > SEARCH_MIN_KEYWORDS) {
      onSearch(keywords);
    } else {
      onClearSearch();
    }
  };

  render() {
    const { resultsCount, filterActive, disabled, style } = this.props;
    const matchesLabel = `match${resultsCount === 1 ? '' : 'es'}`;

    return (
      <div className={`react-lazylog-searchbar ${actionsBar}`} style={style}>
        <div>
          <div onClick={null} className={button}>
            <i className="fa fa-download" />
            Download
          </div>
          <div onClick={null} className={button}>
            <i className="fa fa-arrow-down" />
            Jump to end
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            autoComplete="off"
            type="text"
            name="search"
            placeholder="Search"
            className={`react-lazylog-searchbar-input ${searchInput}`}
            onChange={this.handleSearchChange}
            onKeyPress={this.handleSearchKeyPress}
            value={this.state.keywords}
            disabled={disabled}
          />
          <div onClick={this.handleFilterToggle} className={button}>
            <i className="fa fa-align-left" />
            {filterActive ? 'Unfilter' : 'Filter'} {resultsCount} {matchesLabel}
          </div>
        </div>
      </div>
    );
  }
}

import { Component, Fragment } from 'react';
import { bool, func, number } from 'prop-types';
import FilterLinesIcon from './Icons/FilterLinesIcon';
import { SEARCH_MIN_KEYWORDS } from '../../utils';
import {
  searchBar,
  searchInput,
  button,
  active,
  inactive,
} from './index.module.css';
import DownArrowIcon from './Icons/DownArrowIcon';
import UpArrowIcon from './Icons/UpArrowIcon';

export default class SearchBar extends Component {
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
     * Flag to enable/disable finding next/previous
     * occurrences buttons when searching
     */
    enableFinding: bool,
    /**
     * The index where the search is line jumping to
     */
    currentSearchIndex: number,
    /**
     * Function call when up arrow button is pressed
     */
    onHandleUpSearch: func,
    /**
     * Function call when down arrow button is pressed
     */
    onHandleDownSearch: func,
  };

  static defaultProps = {
    onSearch: () => {},
    onClearSearch: () => {},
    onFilterLinesWithMatches: () => {},
    resultsCount: 0,
    filterActive: false,
    disabled: false,
    enableFinding: true,
    currentSearchIndex: 0,
    onHandleUpSearch: () => {},
    onHandleDownSearch: () => {},
  };

  state = {
    keywords: '',
  };

  handleFilterToggle = () => {
    this.props.onFilterLinesWithMatches(!this.props.filterActive);
  };
  handleUpPress = () => {
    this.props.onHandleUpSearch();
  };
  handleDownPress = () => {
    this.props.onHandleDownSearch();
  };
  handleSearchChange = e => {
    const { value: keywords } = e.target;

    this.setState({ keywords }, () => this.search());
  };

  handleSearchKeyPress = e => {
    if (e.key === 'Enter') {
      if (!this.props.enableFinding) {
        this.handleFilterToggle();
      } else {
        this.handleUpPress();
      }
    }
  };
  checkIfMatching = keywords =>
    keywords && keywords.length > SEARCH_MIN_KEYWORDS;
  search = () => {
    const { keywords } = this.state;
    const { onSearch, onClearSearch } = this.props;

    if (this.checkIfMatching(keywords)) {
      onSearch(keywords);
    } else {
      onClearSearch();
    }
  };

  render() {
    const {
      resultsCount,
      filterActive,
      disabled,
      enableFinding,
      currentSearchIndex,
    } = this.props;
    const matchesLabel = `match${resultsCount === 1 ? '' : 'es'}`;
    const filterIcon = filterActive ? active : inactive;
    const isMatching = this.checkIfMatching(this.state.keywords);

    return (
      <div className={`react-lazylog-searchbar ${searchBar}`}>
        <button
          disabled={disabled}
          className={`react-lazylog-searchbar-filter ${button} ${filterIcon}`}
          onClick={this.handleFilterToggle}>
          {filterActive ? 'Showing only matched lines' : 'Showing all lines'}{' '}
          <FilterLinesIcon />
        </button>
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
        {enableFinding && (
          <Fragment>
            <button
              disabled={disabled}
              className={`react-lazylog-searchbar-filter ${button} ${active}`}
              onClick={this.handleUpPress}>
              <UpArrowIcon />
            </button>
            <button
              disabled={disabled}
              className={`react-lazylog-searchbar-filter ${button} ${active}`}
              onClick={this.handleDownPress}>
              <DownArrowIcon />
            </button>
          </Fragment>
        )}
        <span
          className={`react-lazylog-searchbar-matches ${
            resultsCount ? 'active' : 'inactive'
          } ${resultsCount ? active : inactive}`}>
          {isMatching && resultsCount === 0 ? (
            'No matches found'
          ) : (
            <Fragment>
              {active && resultsCount > 0 && `${currentSearchIndex + 1} of`}{' '}
              {resultsCount} {matchesLabel}
            </Fragment>
          )}
        </span>
      </div>
    );
  }
}

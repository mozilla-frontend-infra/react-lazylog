import { Component } from 'react';
import { bool, func, number } from 'prop-types';
import FilterLinesIcon from './FilterLinesIcon';
import { SEARCH_MIN_KEYWORDS } from '../../utils';
import {
  searchBar,
  searchInput,
  button,
  active,
  inactive,
} from './index.module.css';

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
  };

  static defaultProps = {
    onSearch: () => {},
    onClearSearch: () => {},
    onFilterLinesWithMatches: () => {},
    resultsCount: 0,
    filterActive: false,
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
    const { resultsCount, filterActive } = this.props;
    const matchesLabel = `match${resultsCount === 1 ? '' : 'es'}`;
    const filterIcon = filterActive ? active : inactive;

    return (
      <div className={`react-lazylog-searchbar ${searchBar}`}>
        <input
          autoComplete="off"
          type="text"
          name="search"
          placeholder="Search"
          className={`react-lazylog-searchbar-input ${searchInput}`}
          onChange={this.handleSearchChange}
          value={this.state.keywords}
        />
        <button
          className={`react-lazylog-searchbar-filter ${button} ${filterIcon}`}
          onClick={this.handleFilterToggle}>
          <FilterLinesIcon />
        </button>
        <span
          className={`react-lazylog-searchbar-matches ${
            resultsCount ? active : inactive
          }`}>
          {resultsCount} {matchesLabel}
        </span>
      </div>
    );
  }
}

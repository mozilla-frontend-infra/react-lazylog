import { Component } from 'react';
import { func, number } from 'prop-types';
import { searchBar, searchInput } from './index.module.css';

export default class SearchBar extends Component {
  static propTypes = {
    /**
     * Executes a function when the user has typed search keywords
     * and presses enter.
     */
    onSearch: func,
    /**
     * Number of search results. Should come from the component
     * executing the search algorithm.
     */
    resultsCount: number,
  };

  static defaultProps = {
    onSearch: null,
    resultsCount: 0,
  };

  constructor(props) {
    super(props);

    this.state = { keywords: '' };
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      const { keywords } = this.state;
      const { onSearch } = this.props;

      if (keywords) {
        onSearch(keywords);
      }
    }
  };

  handleOnChange = e => {
    this.setState({ keywords: e.target.value });
  };

  render() {
    const { resultsCount } = this.props;
    const matchesLabel = `match${resultsCount === 1 ? '' : 'es'}`;

    return (
      <div className={searchBar}>
        <input
          type="text"
          name="search"
          placeholder="Search"
          className={searchInput}
          onChange={this.handleOnChange}
          onKeyPress={this.handleKeyPress}
          value={this.state.keywords}
        />
        <span>
          {this.props.resultsCount} {matchesLabel}
        </span>
      </div>
    );
  }
}

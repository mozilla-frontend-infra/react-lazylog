/* eslint-disable @typescript-eslint/no-empty-function */
import { SEARCH_MIN_KEYWORDS } from "../../utils";
import DownArrowIcon from "./ArrowIcons/DownArrow";
import UpArrowIcon from "./ArrowIcons/UpArrow";
import FilterLinesIcon from "./FilterLinesIcon";
import { active, button, clickable, inactive, searchBar, searchInput } from "./index.module.css";
import hotkeys from "hotkeys-js";
import { bool, func, number } from "prop-types";
import React, { Component, Fragment, createRef } from "react";

export default class SearchBar extends Component<any, any> {
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
         * If true, capture system hotkeys for searching the page (Cmd-F, Ctrl-F,
         * etc.)
         */
        captureHotKeys: bool,
        /**
         * Exectues a function when enter is pressed.
         */
        onEnter: func,
        /**
         * Exectues a function when shift + enter is pressed.
         */
        onShiftEnter: func,
        /**
         * If true, adds up and down arrows to search bar to jump
         * to the next and previous result. The down arrow calls
         * "onEnter" and the up arrow calls "onShiftEnter"
         * Defaults to false, which does not add the arrows.
         */
        searchLikeBrowser: bool,
        /**
         * The current result the browser search is highlighting.
         * Only applicable if searchLikeBrowser is true.
         * Defaults to 0.
         */
        currentResultsPosition: number,
    };

    static defaultProps = {
        onSearch: () => {},
        onClearSearch: () => {},
        onFilterLinesWithMatches: () => {},
        resultsCount: 0,
        filterActive: false,
        disabled: false,
        captureHotKeys: false,
        currentResultsPosition: 0,
    };

    state = {
        keywords: "",
    };
    inputRef = undefined;

    constructor(props) {
        super(props);
        this.inputRef = createRef();
    }

    handleSearchChange = (e) => {
        const { value: keywords } = e.target;

        this.setState({ keywords }, () => this.search());
    };

    handleFilterToggle = () => {
        this.props.onFilterLinesWithMatches(!this.props.filterActive);
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            if (e.shiftKey) {
                this.props.onShiftEnter();
            } else {
                this.props.onEnter();
            }
        }
    };

    handleSearchHotkey = (e) => {
        if (!this.inputRef.current) {
            return;
        }

        e.preventDefault();
        this.inputRef.current.focus();
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

    componentDidMount() {
        if (this.props.captureHotKeys) {
            hotkeys("ctrl+f,command+f", this.handleSearchHotkey);
            hotkeys.filter = () => true;
        }
    }

    componentWillUnmount() {
        if (this.props.captureHotKeys) {
            hotkeys.deleteScope("all");
        }
    }

    render() {
        const {
            resultsCount,
            filterActive,
            disabled,
            searchLikeBrowser,
            currentResultsPosition,
            onEnter,
            onShiftEnter,
        } = this.props;
        const matchesLabel = `match${resultsCount === 1 ? "" : "es"}`;
        const filterIcon = filterActive ? active : inactive;
        const arrowIcon = resultsCount ? active : inactive;

        return (
            <div className={`react-lazylog-searchbar ${searchBar}`}>
                <span
                    className={`react-lazylog-searchbar-matches ${resultsCount ? "active" : "inactive"} ${
                        resultsCount ? active : inactive
                    }`}
                    style={{ marginRight: "10px" }}
                >
                    {searchLikeBrowser && resultsCount
                        ? `${currentResultsPosition + 1} of ${resultsCount} ${matchesLabel}`
                        : `${resultsCount} ${matchesLabel}`}
                </span>
                <input
                    autoComplete="off"
                    type="text"
                    name="search"
                    placeholder="Search"
                    className={`react-lazylog-searchbar-input ${searchInput}`}
                    onChange={this.handleSearchChange}
                    onKeyPress={this.handleKeyPress}
                    value={this.state.keywords}
                    disabled={disabled}
                    ref={this.inputRef}
                />
                <button
                    disabled={disabled}
                    className={`react-lazylog-searchbar-filter ${
                        filterActive ? "active" : "inactive"
                    } ${button} ${filterIcon} ${clickable}`}
                    onKeyPress={this.handleKeyPress}
                    onMouseUp={this.handleFilterToggle}
                >
                    <FilterLinesIcon />
                </button>
                {searchLikeBrowser && (
                    <Fragment>
                        <button
                            disabled={disabled}
                            className={`react-lazylog-searchbar-up-arrow ${
                                resultsCount ? `active ${clickable}` : "inactive"
                            } ${button} ${arrowIcon}`}
                            onClick={onShiftEnter}
                        >
                            <UpArrowIcon />
                        </button>
                        <button
                            disabled={disabled}
                            className={`react-lazylog-searchbar-down-arrow ${
                                resultsCount ? `active ${clickable}` : "inactive"
                            } ${button} ${arrowIcon}`}
                            onClick={onEnter}
                        >
                            <DownArrowIcon />
                        </button>
                    </Fragment>
                )}
            </div>
        );
    }
}

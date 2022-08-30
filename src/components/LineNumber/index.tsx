import { lineNumber, lineNumberHighlight } from "./index.module.css";
import { bool, func, number, object } from "prop-types";
import React, { Component } from "react";

/**
 * The line number of a single line.
 * The anchor contained within is interactive, and will highlight the
 * entire line upon selection.
 */
export default class LineNumber extends Component<any, any> {
    static propTypes = {
        /**
         * The line number to display in the anchor.
         */
        number: number.isRequired,
        /**
         * Specify whether this line is highlighted.
         */
        highlight: bool,
        /**
         * Execute a function when the line number is clicked.
         */
        onClick: func,
        style: object,
    };

    static defaultProps = {
        style: null,
        highlight: false,
        onClick: null,
    };

    render() {
        const { highlight, onClick, number, style } = this.props;

        return (
            <a
                id={number}
                onClick={onClick}
                className={highlight ? lineNumberHighlight : lineNumber}
                style={style}
            />
        );
    }
}

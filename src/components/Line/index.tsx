import { arrayOf, bool, func, number, object, shape, string } from "prop-types";

import React, { Component } from "react";

import LineContent from "../LineContent";
import LineNumber from "../LineNumber";
import { line, lineHighlight, lineSelectable } from "./index.module.css";

/**
 * A single row of content, containing both the line number
 * and any text content within the line.
 */
export default class Line extends Component<any, any> {
    static propTypes = {
        data: arrayOf(
            shape({
                text: string,
            }),
        ).isRequired,
        number,
        rowHeight: number,
        highlight: bool,
        selectable: bool,
        style: object,
        formatPart: func,
        onLineNumberClick: func,
        onMouseUp: func,
        className: string,
        highlightClassName: string,
    };

    static defaultProps = {
        highlight: false,
        selectable: false,
        style: {},
        formatPart: null,
        onLineNumberClick: null,
        onMouseUp: null,
        className: "",
        highlightClassName: "",
    };

    render() {
        const {
            data,
            formatPart,
            highlight,
            selectable,
            onLineNumberClick,
            onMouseUp,
            number,
            rowHeight,
            style,
            className,
            highlightClassName,
        } = this.props;
        const selectableClass = selectable ? ` ${lineSelectable}` : "";
        const highlightClass = highlight ? ` ${lineHighlight} ${highlightClassName}` : "";
        const classes = `${line}${selectableClass}${highlightClass} ${className}`;
        const lineStyle = {
            ...style,
            lineHeight: `${style ? style.height || rowHeight : rowHeight}px`,
            minWidth: style ? style.width || "100%" : "100%",
            width: null,
        };
        const contentStyle = { width: "100%", display: "inline-block" };

        return (
            <div className={classes} style={lineStyle}>
                <LineNumber number={number} highlight={highlight} onClick={onLineNumberClick} />
                <LineContent
                    number={number}
                    formatPart={formatPart}
                    data={data}
                    onMouseUp={onMouseUp}
                    style={contentStyle}
                />
            </div>
        );
    }
}

import { object } from "prop-types";

import React, { Component } from "react";

import { lineGutter } from "./index.module.css";

/**
 * The gutter is an element between the line number and content.
 */
export default class LineGutter extends Component<any, any> {
    static propTypes = {
        gutter: object,
    };

    static defaultProps = {
        gutter: null,
    };

    render() {
        const { gutter } = this.props;

        return <span className={lineGutter}>{gutter}</span>;
    }
}

import { upArrowIcon } from "./index.module.css";
import React, { PureComponent } from "react";

export default class UpArrowIcon extends PureComponent {
    render() {
        return (
            <svg className={upArrowIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.4 122.88">
                <path d="M24.94,67.88A14.66,14.66,0,0,1,4.38,47L47.83,4.21a14.66,14.66,0,0,1,20.56,0L111,46.15A14.66,14.66,0,0,1,90.46,67.06l-18-17.69-.29,59.17c-.1,19.28-29.42,19-29.33-.25L43.14,50,24.94,67.88Z" />
            </svg>
        );
    }
}

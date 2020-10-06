import { PureComponent } from 'react';
import { searchIcon } from '../index.module.css';

export default class DownArrowIcon extends PureComponent {
  render() {
    /**
     * From https://icons.getbootstrap.com/icons/arrow-down/ MIT License
     */
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 15 15"
        className={searchIcon}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
      </svg>
    );
  }
}

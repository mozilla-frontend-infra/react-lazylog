import { PureComponent } from 'react';
import { searchIcon } from '../index.module.css';

export default class UpArrowIcon extends PureComponent {
  render() {
    /**
     * From https://icons.getbootstrap.com/icons/arrow-up/ MIT License
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
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        />
      </svg>
    );
  }
}

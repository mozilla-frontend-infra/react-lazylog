import { Component } from 'react';
import { func } from 'prop-types';
import FilterLinesIcon from '../FilterLinesIcon';
import { active, inactive } from './index.module.css';

export default class FilterLinesToggle extends Component {
  static propTypes = {
    /**
     * Execute a function when the component is toggled.
     */
    onToggle: func,
  };

  static defaultProps = {
    onToggle: () => {},
  };

  state = {
    active: false,
  };

  handleToggle = () => {
    this.setState(
      {
        active: !this.state.active,
      },
      () => this.props.onToggle(this.state.active)
    );
  };

  render() {
    const className = this.state.active ? active : inactive;

    return (
      <div className={className} onClick={this.handleToggle}>
        <FilterLinesIcon />
      </div>
    );
  }
}

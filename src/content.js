import React from 'react';
import DocumentSearch from './components/DocumentSearch';
import DocumentMinimap from './components/DocumentMinimap';

import { items } from './temp';

const url = '/api/text3';

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    let search = items;
    if (this.state.value.length > 4) {
      search = items.concat([
        {
          value: this.state.value,
          type: 'text',
          color: 'yellow',
          caseSensitive: true,
        },
      ]);
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <DocumentSearch
          height={600}
          width={902}
          url={url}
          search={search}
          selectableLines
          extraContentRender={props => <DocumentMinimap {...props} height={500} width={200} />}
        />
      </form>
    );
  }
}

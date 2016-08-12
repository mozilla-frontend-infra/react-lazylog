import React from 'react';
import shallowCompare from 'react-addons-shallow-compare'

export default class LazyItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { content: '' };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillReceiveProps({ children = this.state.props.children, load = this.state.load }) {
    if (!load) {
      requestAnimationFrame(() => this.setState({ content: '' }));
    } else {
      children().then(content => requestAnimationFrame(() => this.setState({ content })));
    }
  }

  render() {
    const { style, load } = this.props;
    const { content } = this.state;

    return load ?
      <div className="lazy-item" style={style} dangerouslySetInnerHTML={{ __html: content }} /> :
      <div className="lazy-item" style={style} />;
  }
}

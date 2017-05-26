import React from 'react';

export class ScrollFollow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { follow: props.startFollowing };
  }

  componentWillReceiveProps({ startFollowing }) {
    this.setState({ follow: startFollowing });
  }

  handleScroll({ scrollTop, scrollHeight, clientHeight }) {
    if (this.state.follow && scrollHeight - scrollTop !== clientHeight) {
      this.setState({ follow: false });
    }
  }

  render() {
    const { children } = this.props;
    const { follow } = this.state;

    const onScroll = this.handleScroll.bind(this);
    const startFollowing = () => this.setState({ follow: true });
    const stopFollowing = () => this.setState({ follow: false });

    return children({ follow, onScroll, startFollowing, stopFollowing });
  }
}

ScrollFollow.defaultProps = {
  startFollowing: false,
  style: {}
};

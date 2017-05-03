import React from 'react';
import { LazyList } from './LazyList';
import { stream } from './stream';

export class LazyStream extends LazyList {
  componentWillMount() {
    super.componentWillMount();
    this.stream();
  }

  componentWillReceiveProps(props) {
    const { url } = this.props;

    super
      .componentWillReceiveProps(props)
      .then(() => props.url !== url && this.stream());
  }

  componentWillUnmount() {
    this.stopStreaming();
  }

  stream() {
    const { url, fetchOptions } = this.props;

    this.stopStreaming();

    this.emitter = stream(url, fetchOptions);
    this.emitter.on('update', this.handleUpdate);
    this.emitter.on('end', this.handleEnd);
    this.emitter.on('error', this.handleError);
    this.emitter.emit('start');
  }

  stopStreaming() {
    if (this.emitter) {
      this.emitter.emit('abort');
      this.emitter.off('update', this.handleUpdate);
      this.emitter.off('end', this.handleEnd);
      this.emitter.off('error', this.handleError);
      this.emitter = null;
    }
  }
}

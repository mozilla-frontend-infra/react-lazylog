import React from 'react';
import { LazyList } from './LazyList';
import { request } from './request';

export class LazyLog extends LazyList {
  componentWillMount() {
    this.request();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.request();
    }
  }

  componentWillUnmount() {
    this.stopRequest();
  }

  request() {
    const { url, fetchOptions } = this.props;

    this.stopRequest();

    this.emitter = request(url, fetchOptions);
    this.emitter.on('update', this.handleUpdate);
    this.emitter.on('end', this.handleEnd);
    this.emitter.on('error', this.handleError);
    this.emitter.emit('start');
  }

  stopRequest() {
    if (this.emitter) {
      this.emitter.emit('abort');
      this.emitter.off('update', this.handleUpdate);
      this.emitter.off('end', this.handleEnd);
      this.emitter.off('error', this.handleError);
      this.emitter = null;
    }
  }
}

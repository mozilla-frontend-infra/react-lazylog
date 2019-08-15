import mitt from 'mitt';
import { encode } from './encoding';

export default (url, options) => {
  const emitter = mitt();

  emitter.on('data', message => {
    // need to access the message data
    const lines = encode(message);

    emitter.emit('update', { lines });
  });

  emitter.on('start', () => {
    try {
      // try to connect to websocket
      const socket = new WebSocket(url);

      socket.addEventListener('open', event => {
        if (options.onOpen) {
          options.onOpen(event, socket);
        }
      });
      socket.addEventListener('close', options.onClose);

      socket.addEventListener('error', error => {
        emitter.emit('error', error);
      });

      socket.addEventListener('message', event => {
        let message = event.data;

        if (options.formatMessage) {
          message = options.formatMessage(message);
        }

        emitter.emit('data', message);
      });

      emitter.on('abort', () => socket.close());
    } catch (err) {
      emitter.emit('error', err);
    }
  });

  return emitter;
};

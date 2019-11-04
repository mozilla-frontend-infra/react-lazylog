import mitt from 'mitt';
import { encode } from './encoding';

export default (url, options) => {
  const { onOpen, onClose, onError, formatMessage } = options;
  const emitter = mitt();

  emitter.on('data', msg => {
    const lines = encode(msg);

    emitter.emit('update', { lines });
  });

  emitter.on('start', () => {
    try {
      // try to connect to websocket
      const socket = new WebSocket(url);

      socket.addEventListener('open', e => {
        // relay on open events if a handler is registered
        onOpen && onOpen(e, socket);
      });
      socket.addEventListener('close', onClose);

      socket.addEventListener('error', err => {
        onError && onError(err);
      });

      socket.addEventListener('message', e => {
        const msg = formatMessage ? formatMessage(e.data) : e.data;

        emitter.emit('data', msg);
      });

      emitter.on('abort', () => socket.close());
    } catch (err) {
      emitter.emit('error', err);
    }
  });

  return emitter;
};

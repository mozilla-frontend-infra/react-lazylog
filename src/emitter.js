import mitt from 'mitt';
import { List } from 'immutable';
import { encode } from './encoding';
import { bufferConcat, convertBufferToLines } from './utils';

export default eventSource => {
  const emitter = mitt();
  let overage = null;
  let encodedLog = new Uint8Array();

  eventSource.on('data', data => {
    encodedLog = bufferConcat(encodedLog, encode(data));

    const { lines, remaining } = convertBufferToLines(encode(data), overage);

    overage = remaining;

    emitter.emit('update', { lines, encodedLog });
  });

  eventSource.on('done', () => {
    if (overage) {
      emitter.emit('update', { lines: List.of(overage), encodedLog });
    }

    emitter.emit('end', encodedLog);
  });

  emitter.on('start', async () => {
    try {
      eventSource.emit('start');
    } catch (err) {
      emitter.emit('error', err);
    }
  });

  emitter.on('abort', () => {
    eventSource.emit('abort');
  });

  return emitter;
};

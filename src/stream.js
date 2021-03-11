import { List } from 'immutable';
import mitt from 'mitt';
import { convertBufferToLines, bufferConcat } from './utils';

const fetcher = Promise.resolve().then(() =>
  'ReadableStream' in self && 'body' in self.Response.prototype
    ? self.fetch
    : import('@mattiasbuelens/web-streams-polyfill/ponyfill').then(
        ({ ReadableStream }) => {
          self.ReadableStream = ReadableStream;

          return import('fetch-readablestream');
        }
      )
);

/**
 * @param {!ReadableStream<!Uint8Array>} stream
 * @param {?} emitter 
 */
async function consumeStream(stream, emitter) {
  const reader = stream.getReader();
  emitter.on('abort', () => reader.cancel('ABORTED'));

  let overage = null;
  let encodedLog = new Uint8Array();
  while (true) {
    const {value, done} = await reader.read();
    if (value) {
      encodedLog = bufferConcat(encodedLog, value);
    
      const { lines, remaining } = convertBufferToLines(value, overage);
      overage = remaining;
      emitter.emit('update', { lines, encodedLog });
    }
    if (done) {
      if (overage) {
        emitter.emit('update', { lines: List.of(overage), encodedLog });
      }
  
      emitter.emit('end', encodedLog);
      return;
    }
  }
};

/**
 * @param {string} url
 * @param {?} options
 * @param {?ReadableStream} stream
 */
export default (url, options, stream) => {
  const emitter = mitt();

  emitter.on('start', async () => {
    try {
      const fetch = await fetcher;
      const response = await fetch(
        url,
        Object.assign({ credentials: 'omit' }, options)
      );

      if (!response.ok) {
        const error = new Error(response.statusText);
        error.status = response.status;
        emitter.emit('error', error);
        return;
      }

      return consumeStream(response.body, emitter);
    } catch (err) {
      emitter.emit('error', err);
    }
  });

  return emitter;
};

/**
 * @param {!ReadableStream} stream
 */
export function consumeReadableStream(stream) {
  const emitter = mitt();

  emitter.on('start', async () => {
    try {
      return consumeStream(stream, emitter);
    } catch (err) {
      emitter.emit('error', err);
    }
  });

  return emitter;
};

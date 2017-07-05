import { List } from 'immutable';
import mitt from 'mitt';
import { convertBufferToLines } from './utils';

const fetcher = Promise
  .resolve()
  .then(() => ('ReadableStream' in self && 'body' in self.Response.prototype) ?
    self.fetch :
    import('web-streams-polyfill')
      .then(({ ReadableStream }) => {
        self.ReadableStream = ReadableStream;
        return import('fetch-readablestream');
      }));

export const recurseReaderAsEvent = async (reader, emitter) => {
  const result = await reader.read();

  if (result.value) {
    emitter.emit('data', result.value);
  }

  if (!result.done) {
    return recurseReaderAsEvent(reader, emitter);
  } else {
    emitter.emit('done');
  }
};

export const stream = (url, options) => {
  const emitter = mitt();
  let overage = null;

  emitter.on('data', data => {
    const { lines, remaining } = convertBufferToLines(data, overage);

    overage = remaining;
    emitter.emit('update', lines);
  });

  emitter.on('done', () => {
    if (overage) {
      emitter.emit('update', List.of(overage));
    }

    emitter.emit('end');
  });

  emitter.on('start', async () => {
    try {
      const fetch = await fetcher;
      const response = await fetch(url, Object.assign({ credentials: 'omit' }, options));
      const reader = response.body.getReader();

      emitter.on('abort', () => reader.cancel('ABORTED'));

      return recurseReaderAsEvent(reader, emitter);
    } catch (err) {
      emitter.emit('error', err);
    }
  });

  return emitter;
};

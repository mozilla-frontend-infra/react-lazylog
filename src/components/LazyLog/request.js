import fetchReadable from 'fetch-readablestream';
import { ReadableStream as StreamPolyfill } from 'web-streams-polyfill';
import { List } from 'immutable';
import mitt from 'mitt';

if (!('fetch' in self)) {
  self.fetch = fetchReadable;
}

if (!('ReadableStream' in self)) {
  self.ReadableStream = StreamPolyfill;
}

const encodedNewline = 10;
const encodedCarriageReturn = 13;

const join = (a, b) => {
  const buffer = new Uint8Array(a.length + b.length);

  buffer.set(a, 0);
  buffer.set(b, a.length);

  return buffer;
};

const isNewline = (current, next) => (
  current === encodedNewline ||
  (current === encodedCarriageReturn && next === encodedNewline)
);

const bufferToLines = (current, previous) => {
  const buffer = previous ? join(previous, current) : current;
  const length = buffer.length;
  let lastNewlineIndex = 0;
  let index = 0;

  const lines = List().withMutations(lines => {
    while (index < length) {
      const current = buffer[index];
      const next = buffer[index + 1];

      if (isNewline(current, next)) {
        lines.push(buffer.subarray(lastNewlineIndex, index));
        lastNewlineIndex = current === encodedCarriageReturn && next === encodedNewline ?
          index + 2 :
          index + 1;

        index = lastNewlineIndex;
      } else {
        index++;
      }
    }
  });

  return {
    lines,
    remaining: index !== lastNewlineIndex ? buffer.slice(lastNewlineIndex) : null
  };
};

const read = async (reader, emitter) => {
  const result = await reader.read();

  if (result.value) {
    emitter.emit('data', result.value);
  }

  if (!result.done) {
    return read(reader, emitter);
  } else {
    emitter.emit('done');
  }
};

export const request = (url, options) => {
  const emitter = mitt();

  emitter.on('start', async () => {
    try {
      const response = await fetch(url, Object.assign({ credentials: 'omit' }, options));

      if (!response.ok) {
        const error = new Error(response.statusText);

        error.status = response.status;
        emitter.emit('error', error);
        return;
      }

      const arrayBuffer = await response.arrayBuffer();
      const { lines } = bufferToLines(new Uint8Array(arrayBuffer));

      emitter.emit('update', lines);
      emitter.emit('end');
    } catch (err) {
      emitter.emit('error', err);
    }
  });

  return emitter;
};

export const stream = (url, options) => {
  const emitter = mitt();
  let overage = null;

  emitter.on('data', data => {
    const { lines, remaining } = bufferToLines(data, overage);

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
      const response = await fetch(url, Object.assign({ credentials: 'omit' }, options));
      const reader = response.body.getReader();

      return read(reader, emitter);
    } catch (err) {
      emitter.emit('error', err);
    }
  });

  return emitter;
};

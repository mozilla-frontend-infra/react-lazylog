import mitt from 'mitt';
import { convertBufferToLines } from './utils';

const fetcher = Promise.resolve().then(
  () =>
    'fetch' in self ? self.fetch : import('whatwg-fetch').then(() => self.fetch)
);

export default (url, options) => {
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

      const arrayBuffer = await response.arrayBuffer();
      const { lines, linesRanges } = convertBufferToLines(
        new Uint8Array(arrayBuffer)
      );

      emitter.emit('update', lines);
      emitter.emit('end', { arrayBuffer, linesRanges });
    } catch (err) {
      emitter.emit('error', err);
    }
  });

  return emitter;
};

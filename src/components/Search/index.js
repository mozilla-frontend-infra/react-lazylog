import { search } from './format';

export default class Search {
  static run = search;

  static create(createWorker) {
    return new Search(createWorker);
  }

  constructor(createWorker) {
    this.createWorker = createWorker;
  }

  start() {
    this.remove();
    this.worker = this.createWorker();
  }

  remove() {
    if (this.worker) {
      this.worker.terminate();
    }
  }

  _waitForWorker(cb) {
    if (this.worker) {
      cb(this.worker);
    } else {
      setTimeout(() => {
        this._waitForWorker(cb);
      }, 300);
    }
  }

  highlighter = (lines, search) => {
    return new Promise(res => {
      this._waitForWorker(worker => {
        worker.onmessage = e => {
          res({ lines: e.data });
        };
        // Need to convert it to regular array, else it can't be transfered
        worker.postMessage({ lines: lines.toArray(), search });
      });
    });
  };
}

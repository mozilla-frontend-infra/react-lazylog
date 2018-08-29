import Search from '../Search';

// Todo add text search
self.onmessage = e => self.postMessage(Search.run(e));

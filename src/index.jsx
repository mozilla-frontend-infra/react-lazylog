// Should be removed in the future
import { render } from 'react-dom';
import DocumentViewer from './components/DocumentViewer';
import Worker from './search.worker';

import { items } from './temp';
const root = document.getElementById('root');

const url = 'http://localhost:3002/text3';
const highlighter = (lines, search) => {
  const worker = new Worker();
  return new Promise(res => {
    worker.onmessage = ({ data }) => {
      res(data);
    };
    // Need to convert it to regular array, else it can't be transfered
    worker.postMessage({ lines: lines.toArray(), search });
  });
};

const search = [
  {
    value: 'Annual Report and Accounts',
    caseSensitive: true,
    type: 'text',
    color: 'yellow',
  },
  {
    value: 'Ministry',
    color: 'red',
    type: 'location',
    position: {
      start: 0,
      end: 9,
    },
  },
  {
    value: 'try',
    color: 'blue',
    type: 'text',
    position: {
      start: 6,
      end: 9,
    },
  },
].concat(items);

const time = performance.now();

render(
  <DocumentViewer
    height={500}
    width={902}
    url={url}
    highlighter={highlighter}
    search={search}
    onLoad={() => console.log(performance.now() - time)}
    selectableLines
  />,
  root
);

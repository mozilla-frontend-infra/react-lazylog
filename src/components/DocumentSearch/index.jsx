import { PureComponent } from 'react';
import DocumentViewer from '../DocumentViewer';
import Worker from './search.worker';

export default class DocumentSearch extends PureComponent {
  state = { worker: undefined };

  componentDidMount() {
    this.setState({ worker: new Worker() });
  }

  componentWillUnmount() {
    if (this.state.worker) {
      this.state.worker.terminate();
    }
  }

  waitForWorker(cb) {
    if (this.state.worker) {
      cb(this.state.worker);
    } else {
      setTimeout(() => {
        this.waitForWorker(cb);
      }, 300);
    }
  }

  highlighter = (lines, search) => {
    return new Promise(res => {
      this.waitForWorker(worker => {
        worker.onmessage = e => {
          res({ lines: e.data });
        };
        // Need to convert it to regular array, else it can't be transfered
        worker.postMessage({ lines: lines.toArray(), search });
      });
    });
  };

  render() {
    return <DocumentViewer highlighter={this.highlighter} {...this.props} />;
  }
}

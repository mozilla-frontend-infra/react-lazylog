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

  highlighter = (lines, search) => {
    return new Promise(res => {
      this.state.worker.onmessage = e => {
        res({ lines: e.data });
      };
      // Need to convert it to regular array, else it can't be transfered
      this.state.worker.postMessage({ lines: lines.toArray(), search });
    });
  };

  render() {
    return <DocumentViewer highlighter={this.highlighter} {...this.props} />;
  }
}

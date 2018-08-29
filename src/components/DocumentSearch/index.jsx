import { PureComponent } from 'react';
import DocumentViewer from '../DocumentViewer';
import Worker from './search.worker';
import Search from '../Search';

export default class DocumentSearch extends PureComponent {
  constructor(props) {
    super(props);
    this.search = Search.create(() => new Worker());
  }

  componentDidMount() {
    this.search.start();
  }

  componentWillUnmount() {
    this.search.remove();
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

  render() {
    return <DocumentViewer highlighter={this.search.highlighter} {...this.props} />;
  }
}

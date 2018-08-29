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

  render() {
    return <DocumentViewer highlighter={this.search.highlighter} {...this.props} />;
  }
}

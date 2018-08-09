import { PureComponent } from 'react';

export default class DocumentMinimap extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          height: 200,
          width: 200,
          position: 'absolute',
          top: '0',
          right: '1em',
          backgroundColor: 'red',
          zIndex: 200,
          opacity: 0.5,
        }}
      >
        asd
      </div>
    );
  }
}

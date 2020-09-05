import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Index extends React.Component {
  render() {
    return <div>Hello React</div>;
  }
}

ReactDOM.render(<Index />, document.getElementById('app'));
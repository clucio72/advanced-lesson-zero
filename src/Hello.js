import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

class App extends React.Component {
  render() {
    return <Hello name={'Albert'} />;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

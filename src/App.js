import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from './components/button';

const message = props => <div>{props.msg}</div>;

class App extends Component {

  render() {
    return (
      <div>
        {message({msg: 'A Generic Hello World Text'})}
        {message({msg: 'Creating Reusable React Components'})}
        <Button>click me</Button>
      </div>
    );
  }
}

export default App;

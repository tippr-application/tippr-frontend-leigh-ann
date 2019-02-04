import React, { Component } from 'react';
import { authenticate } from './components/containers/authenticate';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayedComponent />
      </div>
    );
  }
}

const DisplayedComponent = authenticate;

export default App;

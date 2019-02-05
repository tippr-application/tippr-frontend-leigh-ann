import React, { Component } from 'react';
import { authenticate } from './components/containers/authenticate';
import { withRouter } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DisplayedComponent match={this.props.match} history={this.props.history} />
      </div>
    );
  }
}

const DisplayedComponent = authenticate;

export default withRouter(App);

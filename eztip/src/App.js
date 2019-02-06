import React, { Component } from 'react';
import { authenticate } from './components/containers/authenticate';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

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

App.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withRouter(App);

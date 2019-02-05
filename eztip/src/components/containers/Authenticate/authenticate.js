import React from "react";
import { HomeView } from '../../views/HomeView';
import { LoginView } from '../../views/LoginView';

const authenticate = HomeView => LoginView =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        username: "",
        loggedIn: true
      };
    }

    render() {
      if (this.state.loggedIn) {
        return <HomeView match={this.props.match} history={this.props.history} />;
      }
      return <LoginView />;
    }
  };

export default authenticate(HomeView)(LoginView);

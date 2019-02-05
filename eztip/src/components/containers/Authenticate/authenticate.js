import React from "react";
import { HomeView } from '../../views/HomeView';
import { LoginView } from '../../views/LoginView';
import { connect } from 'react-redux';

const authenticate = HomeView => LoginView =>
  class extends React.Component {

    render() {
      return (
        this.props.loggedIn ? 
        <HomeView match={this.props.match} history={this.props.history} />
        : <LoginView history={this.props.history} />
      )

      }
    }

  const mapStateToProps = state => ({
    loggedIn: state.userReducer.loggedIn
  })

export default connect(mapStateToProps)(authenticate(HomeView)(LoginView));

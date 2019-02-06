import React from "react";
import { LoginForm } from "../../presentational/LoginForm";
import { CreateUsernameForm } from "../../presentational/CreateUsernameForm";
import { CreateProfileForm } from "../../presentational/CreateProfileForm";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LoginView extends React.Component {
  render() {
    return (
      <>
        <Route exact path="/" render={props => <LoginForm {...props} />} />
        {this.props.userRegistered ? (
          <Route
            path="/signup"
            render={props => <CreateProfileForm {...props} />}
          />
        ) : (
          <Route
            path="/signup"
            render={props => <CreateUsernameForm {...props} />}
          />
        )}
      </>
    );
  }
}

LoginView.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userRegistered: state.userReducer.userRegistered
});

export default connect(mapStateToProps)(LoginView);

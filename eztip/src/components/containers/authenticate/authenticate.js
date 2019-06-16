import React from "react";
import { login } from "../../../store/actions";
import { HomeView } from "../../views/HomeView";
import { LoginView } from "../../views/LoginView";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const authenticate = HomeView => LoginView =>
class extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      const u = localStorage.getItem("username");
      const p = localStorage.getItem("password");
      this.props.login({
        username: u,
        password: p
      });
    }
  }
    render() {
      return this.props.loggedIn ? (
            <HomeView match={this.props.match} history={this.props.history} />
      ) : (
        <LoginView history={this.props.history} match={this.props.match} />
      );
    }
  };

const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn
});

authenticate.propTypes = {
  login: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {login})(authenticate(HomeView)(LoginView));

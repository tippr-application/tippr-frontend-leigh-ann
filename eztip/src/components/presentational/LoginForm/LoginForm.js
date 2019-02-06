import React from "react";
import { login } from "../../../store/actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  state = {
    username: "",
    password: ""
  };

  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitLogin = e => {
    e.preventDefault();
    this.props.login({
      username: this.state.username,
      password: this.state.password
    });
  };

  render() {
    return (
      <div>
        <h1>Please Log In</h1>
        <form onSubmit={e => this.submitLogin(e)}>
          <input
            type="text"
            name="username"
            onChange={this.inputChange}
            placeholder="Name"
          />
          <input
            type="password"
            name="password"
            onChange={this.inputChange}
            placeholder="Password"
          />
          <button>Sign in</button>
        </form>
        <p>New to this? <Link to="/signup">Sign up.</Link></p>
      </div>
    );
  }
}

LoginForm.propTypes = {
  history: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
}

const mapStateToProps = state => {

}

export default connect(
  null,
  { login }
)(LoginForm);

import React from "react";
import { login } from "../../../store/actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoginFormContainer = styled.div`
border: 1px solid #b5b5b5;
margin: 0 auto;
margin-top: 20vh;
max-width: 600px;
width: 100%;
display: flex;
flex-direction: column
justify-content: center;
align-items: center;
padding: 40px;

h1 {
  margin-bottom: 40px;
}
`;

const Form = styled.form`
display: flex;
flex-direction: column;
min-width: 300px;
width: 80%;

input {
  margin-bottom: 20px;
}

`;

const ButtonDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

button {
  margin-top: 20px;
  margin-bottom: 10px;
  width: 45%;
}
`;

const SignUpContainer = styled(LoginFormContainer)`
margin-top: 25px;
`;


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

  clearInfo = e => {
    e.preventDefault();
    this.setState({
      username: "",
      password: ""
    })
  }

  render() {
    return (
      <>
      <LoginFormContainer>
        <h1>Please Sign In</h1>
        <Form onSubmit={e => this.submitLogin(e)}>
          <input
          required
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.inputChange}
            placeholder="Userame"
          />
          <input
          required
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.inputChange}
            placeholder="Password"
          />
          <ButtonDiv>
          <button type="submit">Sign in</button>
          <button onClick={e=> this.clearInfo(e)}type="button">Clear</button>
          </ButtonDiv>
        </Form>

      </LoginFormContainer>
      <SignUpContainer>
        <p>New to this? <Link to="/signup">Sign up</Link>.</p>
      </SignUpContainer>
      </>
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

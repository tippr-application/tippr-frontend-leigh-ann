import React from "react";
import { login } from "../../../store/actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageContainer = styled.div`
margin: 0 auto;
margin-top: 20vh;
text-align: center;

@media (max-width:500px) {
  margin-top: 5vh;
}
`;

const LoginFormContainer = styled.div`
border: 1px solid #b5b5b5;
margin: 0 auto;
max-width: 600px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 40px;
margin-top: 50px;
background: white;
-webkit-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.15);
-moz-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.15);
box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.15);

@media (max-width: 700px ) {
  width: 85%;
}

h2 {
  margin-bottom: 40px;
  font-size: 2.8rem;
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

const Logo = styled.a`
font-family: "Ubuntu", sans-serif;
text-transform: lowercase;
text-align: center;
font-size: 4.5rem;
text-decoration: none;
color: #000000;

&:hover {
  text-decoration: none;
}
`;

const Error = styled.p`
padding-bottom: 25px;
`;

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
    error: null
  };

  componeneDidMount() {
    this.setState({
      error: null
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("CDU ran before if");
    if (this.props.error !== prevProps.error) {
      console.log("CDU ran inside if");
      this.setState({
        error: this.props.error
      })
    }
  }

  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitLogin = e => {
    e.preventDefault();
    localStorage.setItem("username", this.state.username);
    localStorage.setItem("password", this.state.password)
    this.props.login({
      username: this.state.username,
      password: this.state.password,
    })
  };

  clearInfo = e => {
    e.preventDefault();
    this.setState({
      username: "",
      password: "",
      error: null
    })
  }

  render() {
    return (
      <PageContainer>
        <Logo href="https://justin-tippr.netlify.com/">Tippr</Logo>
      <LoginFormContainer>
        <h2>Please Sign In</h2>
        {this.props.error && <Error>{this.state.error}</Error>}
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
      </PageContainer>
    );
  }
}

const mapStateToProps = state => ({
  error: state.userReducer.error,
})

LoginForm.propTypes = {
  history: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  { login }
)(LoginForm);

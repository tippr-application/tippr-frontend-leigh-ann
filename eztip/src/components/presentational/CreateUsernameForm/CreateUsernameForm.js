import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../../../store/actions";
import styled from "styled-components";
import PropTypes from 'prop-types';

const PageContainer = styled.div`
margin: 0 auto;
margin-top: 20vh;

@media (max-width:500px) {
  margin-top: 5vh;
}
`;

const RegisterFormContainer = styled.div`
border: 1px solid #b5b5b5;
margin: 0 auto;
max-width: 600px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 40px;
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

const Select = styled.select`
    font-size: 1.6rem;
    background: #f8f8f8;
    border: 1px solid #b5b5b5;
    color: black;
    margin-bottom: 10px;
    font-family: "Source Sans Pro", sans-serif;
`;

const Logo = styled.h1`
font-family: "Ubuntu", sans-serif;
text-transform: lowercase;
text-align: center;
font-size: 4.5rem;
margin-bottom: 50px;
`;

class CreateUsernameForm extends React.Component {
  state = {
    username: "",
    password: "",
    user_type: ""
  };

  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  registerUser = e => {
    e.preventDefault();
    this.props.registerUser({
      username: this.state.username,
      password: this.state.password,
      user_type: this.state.user_type
    });
  };

  cancel = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  render() {
    return (
      <PageContainer>
      <Logo>Tippr</Logo>
      <RegisterFormContainer>
        <h2>Sign Up</h2>
        <Form onSubmit={e => this.registerUser(e)}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.inputChange}
            placeholder="Choose a username"
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.inputChange}
            placeholder="Create password"
          />
            <Select required name="user_type" onChange={this.inputChange} defaultValue="">
              <option disabled value="">Please select a profile type</option>
                <option value="employee">Employee</option>
                <option value="guest">Guest</option>
              </Select>
          <ButtonDiv>
            <button>Sign up</button>
            <button onClick={this.cancel} type="button">Cancel</button>
          </ButtonDiv>
        </Form>
      </RegisterFormContainer>
      </PageContainer>
    );
  }
}

CreateUsernameForm.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(
  null,
  { registerUser }
)(CreateUsernameForm);

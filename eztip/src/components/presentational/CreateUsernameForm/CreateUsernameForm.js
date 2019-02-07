import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../../../store/actions";
import styled from "styled-components";

const RegisterFormContainer = styled.div`
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
      user_type: ""
    });
  };

  cancel = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  render() {
    return (
      <RegisterFormContainer>
        <h1>Sign Up</h1>
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
                        <select required name="user_type" onChange={this.inputChange} defaultValue="">
              <option disabled value="">Please select a profile type</option>
                <option value="employee">Employee</option>
                <option value="guest">Guest</option>
              </select>
          <ButtonDiv>
            <button>Sign up</button>
            <button onClick={this.cancel} type="button">Cancel</button>
          </ButtonDiv>
        </Form>
      </RegisterFormContainer>
    );
  }
}

export default connect(
  null,
  { registerUser }
)(CreateUsernameForm);

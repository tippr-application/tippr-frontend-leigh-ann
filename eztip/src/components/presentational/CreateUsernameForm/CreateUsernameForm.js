import React from "react";
import { connect } from "react-redux";
import { registerUser } from '../../../store/actions';

class CreateUsernameForm extends React.Component {
    state = {
            username: "",
            password: ""
    }

    inputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    registerUser = e => {
        e.preventDefault();
        this.props.registerUser({
            username: this.state.username,
            password: this.state.password
        })
        
    }

    cancel = e => {
        e.preventDefault();
        this.props.history.push("/");
    }

  render() {
    return (
      <div>
        <form onSubmit={e=> this.registerUser(e)}>
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
          <button>Sign up</button>
          <button type="button">Cancel</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { registerUser })(CreateUsernameForm);

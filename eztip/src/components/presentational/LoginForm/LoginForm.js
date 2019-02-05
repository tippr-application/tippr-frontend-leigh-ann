import React from 'react';
import { login } from '../../../store/actions';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
    state = {
        username: "",
        password: ""
    }

    componentDidMount() {
        this.props.history.push("/login");
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    submitLogin = (e) => {
        e.preventDefault();
        this.props.login({
            username: this.state.username,
            password: this.state.password
        });
        this.props.history.push("/welcome")
    };

    render() {
        return (
            <div>
                <h1>Please Log In</h1>
                <form onSubmit={e => this.submitLogin(e)}>
                    <input type="text" name="username" onChange={this.inputChange} placeholder="Name" />
                    <input type="password" name="password" onChange={this.inputChange} placeholder="Password" />
                    <button>Sign in</button>
                </form>
            </div>
        )
    }

}

export default connect(null, { login })(LoginForm);

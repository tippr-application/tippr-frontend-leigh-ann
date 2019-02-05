import React from 'react';
import { LoginForm } from '../../presentational/LoginForm';

const LoginView = props => {
    return (
        <div>
           <LoginForm history={props.history} match={props.match} />
        </div>
    )
}

export default LoginView;

import React from 'react';
import { LoginForm } from '../../presentational/LoginForm';

const LoginView = props => {
    return (
        <div>
           <LoginForm history={props.history} />
        </div>
    )
}

export default LoginView;

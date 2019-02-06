import React from 'react';
import { LoginForm } from '../../presentational/LoginForm';
import PropTypes from 'prop-types';

const LoginView = props => {
    return (
        <div>
           <LoginForm history={props.history} match={props.match} />
        </div>
    )
}

LoginView.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default LoginView;

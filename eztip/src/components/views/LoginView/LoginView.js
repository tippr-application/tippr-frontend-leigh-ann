import React from 'react';
import { LoginForm } from '../../presentational/LoginForm';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginView = props => {
    return (
        <div>
           <LoginForm history={props.history} match={props.match} />
           <p>New to this? <Link to="/signup">Sign up.</Link></p>
        </div>
    )
}

LoginView.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default LoginView;

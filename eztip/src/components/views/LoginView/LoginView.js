import React from 'react';
import { LoginForm } from '../../presentational/LoginForm';
import { CreateUsernameForm } from '../../presentational/CreateUsernameForm';
import { CreateProfileForm } from '../../presentational/CreateProfileForm';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const LoginView = props => {
    return (
        <div>
            <Route exact path="/" render={props => <LoginForm {...props} /> } />
            <Route path="/signup" render={props => <CreateUsernameForm {...props} />} />
            <Route path="/signup/createprofile" render={props => <CreateProfileForm {...props} />} />


        </div>
    )
}

LoginView.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

export default LoginView;

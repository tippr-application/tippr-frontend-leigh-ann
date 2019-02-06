import React from 'react';
import { ProfileForm } from '../../presentational/ProfileForm';
import PropTypes from 'prop-types';

const ProfileFormContainer = props => {
    return <ProfileForm history={props.history} />
}

ProfileFormContainer.propTypes = {
    history: PropTypes.object.isRequired
}
export default ProfileFormContainer;
import React from 'react';
import PropTypes from 'prop-types';

const Employee = props => {
    return (
        <div>
            <h1>{props.userInfo.first_name} {props.userInfo.last_name}</h1>
            <p>{props.userInfo.tagline}</p>
            <img alt={`${props.userInfo.first_name} ${props.userInfo.last_name}`} src={props.userInfo.profile_photo}></img>
            <p>Employee since {props.userInfo.working_since}</p>
        </div>
    )
}

Employee.propTypes = {
    userInfo: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        id: PropTypes.number,
        tagline: PropTypes.string,
        profile_photo: PropTypes.string,
        type_id: PropTypes.number,
        user_type: PropTypes.string,
        username: PropTypes.string,
        working_since: PropTypes.string
    })
}
export default Employee;
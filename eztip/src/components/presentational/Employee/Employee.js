import React from 'react';

const Employee = props => {
    return (
        <div>
            <h1>{props.userInfo.first_name} {props.userInfo.last_name}</h1>
            <p>{props.userInfo.tagline}</p>
            <img src={props.userInfo.profile_photo}></img>
            <p>Employee since {props.userInfo.working_since}</p>
        </div>
    )
}

export default Employee;
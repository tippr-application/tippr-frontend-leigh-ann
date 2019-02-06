import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EmployeeProfileDiv = styled.div`
border: 1px solid red;
margin: 0 auto;

`;

const ProfileImg = styled.img`
    max-width: 300px;
    border-radius: 50%;
`;


const Employee = props => {
    const routeToUpdateForm = e => {
        e.preventDefault();
        props.history.push("/form")
    }

    return (
        <EmployeeProfileDiv>
            <h1>Hi there, {props.userInfo.first_name}</h1>
            <h2>{props.userInfo.first_name} {props.userInfo.last_name}</h2>
            <p>{props.userInfo.tagline}</p>
            <p>Working as a {props.userInfo.occupation} since {props.userInfo.working_since}</p>
            <ProfileImg alt={`${props.userInfo.first_name} ${props.userInfo.last_name}`} src={props.userInfo.profile_photo}></ProfileImg>
            <button onClick={e=> routeToUpdateForm(e)}>Update Profile</button>
        </EmployeeProfileDiv>
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
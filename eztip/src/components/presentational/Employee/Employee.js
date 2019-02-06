import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const EmployeeProfileDiv = styled.div`
width: 600px;
border: 1px solid red;
margin-top: 100px;
`;

const Employee = props => {
    const routeToUpdateForm = e => {
        e.preventDefault();
        props.history.push("/form")
    }

    return (
        <EmployeeProfileDiv>
            <h1>Welcome, {props.userInfo.first_name} {props.userInfo.last_name}</h1>
            <p>{props.userInfo.tagline}</p>
            <img alt={`${props.userInfo.first_name} ${props.userInfo.last_name}`} src={props.userInfo.profile_photo}></img>
            <p>Employee since {props.userInfo.working_since}</p>
            <button onClick={e=> routeToUpdateForm(e)}>Update</button>
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
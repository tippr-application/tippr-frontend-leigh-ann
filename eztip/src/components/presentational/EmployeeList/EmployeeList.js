import React from "react";
import { EmployeeCard } from "../Employee";
import PropTypes from "prop-types";
import styled from 'styled-components';

const EmployeeListDiv = styled.div`
display: flex;
flex-wrap: wrap;
max-width: 1200px;
width: 100%;
justify-content: center;
`;

const H2Div = styled.h2`
text-align: center;
margin: 30px 15px 20px;
`;

const EmployeeList = props => {

  const employees = props.users.filter(user => user.user_type === "employee");

  return (
    <div>
      <H2Div>Which employee would you like to tip?</H2Div>
      <EmployeeListDiv>
      {employees.map(employee => (
        <EmployeeCard
          employee={employee}
          key={employee.id}
          match={props.match}
          history={props.history}
        />
      ))}
      </EmployeeListDiv>
    </div>
  );
};

EmployeeList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      id: PropTypes.number,
      tagline: PropTypes.string,
          profile_photo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
      type_id: PropTypes.number,
      user_type: PropTypes.string,
      username: PropTypes.string,
       working_since: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
    })
  ),
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
export default EmployeeList;

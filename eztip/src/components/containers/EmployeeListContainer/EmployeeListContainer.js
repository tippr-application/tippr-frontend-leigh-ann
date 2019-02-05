import React from "react";
import { EmployeeList } from "../../presentational/EmployeeList";

const EmployeeListContainer = props => {
  return (
    <EmployeeList
      users={props.users}
      match={props.match}
      history={props.history}
    />
  );
};

export default EmployeeListContainer;

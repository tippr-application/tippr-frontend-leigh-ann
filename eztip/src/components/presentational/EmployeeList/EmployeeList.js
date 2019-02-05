import React from "react";
import { EmployeeCard } from "../Employee";

const EmployeeList = props => {
    console.log("EmployeeList", props);
  const employees = props.users.filter(user => user.user_type === "employee");

  return (
    <div>
      <h2>Which employee would you like to tip?</h2>
      {employees.map(employee => (
        <EmployeeCard 
            employee={employee} 
            key={employee.id} 
            match={props.match}
            history={props.history}
        />
      ))}
    </div>
  );
};

export default EmployeeList;

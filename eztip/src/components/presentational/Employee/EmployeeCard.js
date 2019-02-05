// this is for guest viewing an employee
import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

const EmployeeCard = props => {
console.log("EmployeeCard", props);

    const employee = props.employee
        ? props.employee
        : props.users.find(user => props.match.params.id === `${user.id}`);

  const payTip = e => {
    e.preventDefault();
    props.history.push(`/welcome/guest/${employee.id}/tip`);
  };

  const goBack = e => {
    e.preventDefault();
    props.history.push("/welcome/guest");
  };

  return (
    <Link to={`/welcome/guest/${employee.id}`}>
      <h2>
        {employee.first_name} {employee.last_name}
      </h2>
      <p>{employee.tagline}</p>
      <p>Working since {employee.working_since}</p>
      <button type="button" onClick={payTip}>
        Give a Tip
      </button>
      <button type="button" onClick={goBack}>
        Go Back
      </button>
    </Link>
  );
};

const mapStateToProps = state => ({
    users: state.userReducer.users
});

export default connect(mapStateToProps)(EmployeeCard);

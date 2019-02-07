// this is for guest viewing an employee
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const EmployeeCard = props => {

  const employee = props.employee
    ? props.employee
    : props.users.find(user => props.match.params.id === `${user.id}`);

  const payTip = e => {
    e.preventDefault();
    props.history.push(`/employee/${employee.id}/tip`);
  };

  const goBack = e => {
    e.preventDefault();
    props.history.push("/");
  };

  return (
    <Link to={`/employee/${employee.id}`}>
      <h2>
        {employee.first_name} {employee.last_name}
      </h2>
      <p>{employee.tagline}</p>
      <p>Working since {employee.working_since}</p>
      {!props.employee && (
        <div>
          <button type="button" onClick={payTip}>
            Give a Tip
          </button>
          <button type="button" onClick={goBack}>
            Go Back
          </button>
        </div>
      )}
    </Link>
  );
};

const mapStateToProps = state => ({
  users: state.userReducer.users
});

EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    id: PropTypes.number,
    tagline: PropTypes.string,
    profile_photo: PropTypes.string,
    type_id: PropTypes.number,
    user_type: PropTypes.string,
    username: PropTypes.string,
    working_since: PropTypes.string
  }),
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  id: PropTypes.number
}
export default connect(mapStateToProps)(EmployeeCard);

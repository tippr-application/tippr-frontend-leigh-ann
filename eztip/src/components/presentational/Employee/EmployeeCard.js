// this is for guest viewing an employee
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  border: 1px dotted black;

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  h2 {
    color: black;
    font-size: 3rem;
  }
`;


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
      <CardDiv>

      <img src={employee.profile_photo} />
      <div>
      <h2>
        {employee.first_name} {employee.last_name}
      </h2>
      <p>{employee.tagline}</p>
      </div>
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

      </CardDiv>
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
  }),
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  id: PropTypes.number
}
export default connect(mapStateToProps)(EmployeeCard);

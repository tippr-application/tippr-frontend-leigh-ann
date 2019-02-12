// this is for guest viewing an employee
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 375px;
  min-width: 330px;
  width: 30%;
  text-align: center;
  align-items: center;
  padding: 35px 30px;
  margin: 1.5%;
  justify-content: center;
  background-color: white;
  border: 1px solid #b5b5b5;
  -webkit-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.15);

  a {
    color: black;

    &:hover {
      text-decoration: none;
    }
  }

  p {
    margin-bottom: 5px;
  }

  h2 {
    color: black;
    font-size: 2rem;
  }

  button {
    margin: 25px 5px;
  }
`;

const ProfileImgDiv = styled.div`
position: relative;
width: 175px;
height: 175px;
overflow: hidden;
border-radius: 50%;
margin: 0 auto;
margin-bottom: 20px;
`;

const ProfileImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: auto;
  transform: translate(-50%,-50%);
`;

const Tagline = styled.p`
  font-style: italic;

  span {
    font-style: normal;
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
    <CardDiv>
      <Link to={`/employee/${employee.id}`}>
      <div>
      <ProfileImgDiv>
          <ProfileImg src={employee.profile_photo} alt={employee.first_name} />
        </ProfileImgDiv>
        <div>
          <h2>
            {employee.first_name} {employee.last_name}
          </h2>
          <Tagline><span>Tagline: </span> {employee.tagline}</Tagline>
        </div>
        <p className="since">Working since {employee.working_since}</p>
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
      </div>
      </Link>
    </CardDiv>
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
    profile_photo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type_id: PropTypes.number,
    user_type: PropTypes.string,
    username: PropTypes.string,
    working_since: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  id: PropTypes.number
};
export default connect(mapStateToProps)(EmployeeCard);

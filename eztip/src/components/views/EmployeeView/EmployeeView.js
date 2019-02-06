import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import { Employee } from "../../presentational/Employee";
import { ProfileFormContainer } from "../../containers/ProfileFormContainer";
import styled from 'styled-components';

const EmployeeViewContainer = styled.div`
max-width: 1200px;
width: 100%;
margin: 0 auto;
`;

const EmployeeView = props => {
  console.log("EmployeeView", props);

  return (
    <EmployeeViewContainer>
      <Route
        exact
        path="/"
        render={properties => (
          <Employee {...properties} userInfo={props.userInfo} />
        )}
      />
      <Route
        path="/form"
        render={properties => (
          <ProfileFormContainer
            {...properties}
            history={props.history}
            employee={props.userInfo}
          />
        )}
      />
    </EmployeeViewContainer>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userReducer.userInfo
});

EmployeeView.propTypes = {
  userInfo: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    id: PropTypes.number,
    tagline: PropTypes.string,
    profile_photo: PropTypes.string,
    type_id: PropTypes.number,
    user_type: PropTypes.string,
    username: PropTypes.string,
    working_since: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }),
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(EmployeeView);

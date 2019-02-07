import React from "react";
import { EmployeeList } from "../../presentational/EmployeeList";

import PropTypes from "prop-types";

const EmployeeListContainer = props => {
  return (
    <EmployeeList
      users={props.users}
      match={props.match}
      history={props.history}
    />
  );
};

EmployeeListContainer.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default EmployeeListContainer;

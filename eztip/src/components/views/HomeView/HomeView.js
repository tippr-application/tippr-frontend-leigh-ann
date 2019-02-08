import React from "react";
import { Route } from "react-router";

import { GuestView } from "../GuestView";
import { EmployeeView } from "../EmployeeView";
import { Navigation } from "../../presentational/Navigation";

import { connect } from "react-redux";
import { getEmployees } from "../../../store/actions";
import PropTypes from "prop-types";
import styled from 'styled-components';

const HomeViewContainer = styled.div`
position: relative;
width: 100%
`;

class HomeView extends React.Component {
  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    return (
      <HomeViewContainer>
        <Navigation history={this.props.history} />
        {this.props.userType === "employee" ? (
          <Route path="/" render={props => <EmployeeView {...props} />} />
        ) : (
          <Route
            path="/"
            render={props => <GuestView {...props} />}
          />
        )}
      </HomeViewContainer>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userReducer.users,
  userType: state.userReducer.userType
});

HomeView.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  getEmployees: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { getEmployees }
)(HomeView);

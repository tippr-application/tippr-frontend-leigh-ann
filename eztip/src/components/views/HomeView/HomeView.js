import React from "react";
import { Route } from "react-router";

import { GuestView } from "../GuestView";
import { EmployeeView } from "../EmployeeView";
import { Navigation } from "../../presentational/Navigation";

import { connect } from "react-redux";
import { getEmployees } from "../../../store/actions";

class HomeView extends React.Component {
  componentDidMount() {
    this.props.getEmployees();
    console.log(this.props);
    this.props.userType === "employee"
      ? this.props.history.push("/welcome/employee")
      : this.props.history.push("/welcome/guest");
  }

  render() {
    return (
      <div>
        <Navigation />
        <h1>Welcome</h1>
        <Route
          path="/welcome/employee"
          render={props => <EmployeeView {...props} />}
        />
        <Route
          path="/welcome/guest"
          render={props => <GuestView {...props} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userReducer.users,
  userType: state.userReducer.userType
});

export default connect(
  mapStateToProps,
  { getEmployees }
)(HomeView);

import React from 'react';
import { Route } from 'react-router';

import { GuestView } from '../GuestView';
import { EmployeeView } from '../EmployeeView';
import { Navigation } from '../../presentational/Navigation';

import { connect } from 'react-redux';
import { getEmployees } from '../../../store/actions';

class HomeView extends React.Component {

    // getEmployeeById = id => {
    //     this.props.getProfileById(id);
    // }

    componentDidMount() {
        this.props.getEmployees();
    }

    render() {
        return (
            <div>
                <Navigation />
                <h1>Welcome</h1>
                <Route exact path="/guest" component={GuestView} />
                <Route exact path="/employee/:id" render={props => <EmployeeView {...props} users={this.props.users} />} />
            </div>
        )
    }

}

const mapStateToProps = state => ({
    users: state.userReducer.users
});

export default connect(mapStateToProps, { getEmployees })(HomeView);

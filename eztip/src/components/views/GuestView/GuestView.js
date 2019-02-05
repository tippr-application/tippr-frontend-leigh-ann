import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { EmployeeListContainer } from '../../containers/EmployeeListContainer';
import { EmployeeCard } from '../../presentational/Employee';
import { PaymentFormContainer } from '../../containers/PaymentFormContainer';

const GuestView = props => {
    const users = props.users;

    return (
        <div>
            <h1>Guest</h1>
            
            <Route exact path="/welcome/guest" render={props => <EmployeeListContainer {...props} />} />
            <Route exact path="/welcome/guest/:id" render={props => <EmployeeCard {...props} />} />
            <Route path="/welcome/guest/:id/tip" render={props => <PaymentFormContainer {...props} /> } />
        </div>
    )
}

const mapStateToProps = state => ({
    users: state.userReducer.users
});

export default connect(mapStateToProps)(GuestView);

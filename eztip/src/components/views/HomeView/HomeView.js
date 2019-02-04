import React from 'react';
import { Route } from 'react-router';

import { GuestView } from '../GuestView';
import { EmployeeView } from '../EmployeeView';

const HomeView = props => {
    return (
        <div>
            <h1>Welcome</h1>
            <Route exact path="/guest" component={GuestView} />
            <Route exact path="/employee" component={EmployeeView} />
        </div>
    )
}

export default HomeView;

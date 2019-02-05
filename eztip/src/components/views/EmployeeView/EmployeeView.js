import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router';
// import { connect } from 'react-redux';

import { Employee } from '../../presentational/Employee';
import { ProfileForm } from '../../presentational/ProfileForm';

// import { getProfileById } from '../../../store/actions';

class EmployeeView extends React.Component {

    // getEmployeeById = id => {
    //     this.props.getProfileById(id);
    // }

    // componentDidMount() {
    //     this.getEmployeeById(1);
    // }

    render() {
        return (
            <div>
                {/* <Employee users={this.props.users} />
                <Link to="/employee/:id/create"><button>Create Profile</button></Link>
                <Route exact path="/employee/:id/create" component={ProfileForm} /> */}
                EmployeeView
            </div>
        )
    }

}

// const mapStateToProps = state => ({
//     userInfo: state.userReducer.userInfo
// });


// export default connect(mapStateToProps, { getProfileById })(EmployeeView);

export default EmployeeView;
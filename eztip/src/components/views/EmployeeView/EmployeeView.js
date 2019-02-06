import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Employee } from '../../presentational/Employee';
import { ProfileFormContainer } from '../../containers/ProfileFormContainer';


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
                <Employee />
                <ProfileFormContainer />
            </div>
        )
    }

}

const mapStateToProps = state => ({
    userInfo: state.userReducer.userInfo
});

export default connect(mapStateToProps)(EmployeeView);
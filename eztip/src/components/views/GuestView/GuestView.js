import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { EmployeeListContainer } from '../../containers/EmployeeListContainer';
import { EmployeeCard } from '../../presentational/Employee';
import { PaymentFormContainer } from '../../containers/PaymentFormContainer';

import PropTypes from 'prop-types';
import styled from 'styled-components';

const GuestViewContainer = styled.div`
max-width: 1200px;
width: 100%;
margin: 0 auto;
`;


const GuestView = props => {

    const users = props.users;
    
    return (
        <GuestViewContainer>
            <h1>Guest</h1>
            
            <Route exact path="/" render={props => <EmployeeListContainer {...props} users={users} />} />
            <Route exact path="/employee/:id" render={props => <EmployeeCard {...props} />} />
            <Route path="/employee/:id/tip" render={props => <PaymentFormContainer {...props} /> } />
        </GuestViewContainer>
    )
}

const mapStateToProps = state => ({
    users: state.userReducer.users
});

GuestView.propTypes = {
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
    history: PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(GuestView);

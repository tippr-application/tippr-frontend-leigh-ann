import React from 'react';

const Navigation = props => {
    return (
        <div>
            <span>Home</span>
            <span>Pay Tip</span>
        </div>
    );
}

export default Navigation;

//for guest it should say "Pay Tip", for employee it should say "My Tips"
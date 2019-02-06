import React from 'react';

const Navigation = props => {
    return (
        <div>
            <p>Home</p>
            <p>Pay Tip</p>
        </div>
    );
}

export default Navigation;

//for guest it should say "Pay Tip", for employee it should say "My Tips"
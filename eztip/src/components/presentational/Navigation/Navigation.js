import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.div`
background: #43d9b8;
height: 75px;
position: fixed;
top: 0;
left: 0;
width: 100%;
-webkit-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.19);
-moz-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.19);
box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.19);
display: flex;
align-items: center;
`;

const NavigationDiv = styled.div`
max-width: 1200px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
`;

const Navigation = props => {
    return (
        <NavigationContainer>
            <NavigationDiv>
            <h2>Home</h2>
            <h2>Pay Tip</h2>
            </NavigationDiv>
        </NavigationContainer>
    );
}

export default Navigation;

//for guest it should say "Pay Tip", for employee it should say "My Tips"
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logout } from "../../../store/actions";
import PropTypes from "prop-types";

const NavigationContainer = styled.div`
  background: #43d9b8;
  height: 75px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  -webkit-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.19);
  display: flex;
  align-items: center;

  @media (max-width: 525px) {
    height: 110px;
  }

  h1 {
    text-transform: lowercase;
    font-family: Ubuntu;
    font-weight: 700;
  }
`;

const NavigationDiv = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto;

  @media (max-width: 525px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
  }
`;

const LogoDiv = styled.div`
  max-width: 300px;
  width: 25%;
  margin-left: 20px;
  display: flex;
  align-items: flex-end;

  @media (max-width: 525px) {
    justify-content: center;
    margin-left: 0;

    h1 {
      margin-bottom: 25px;
    }
  }
`;

const NavLinkDiv = styled.div`
  max-width: 900px;
  width: 75%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  h2 {
    margin-right: 20px;
    font-size: 1.6rem;

    &:hover {
      cursor: pointer;
    }

    @media (max-width: 525px) {
      margin-left: 0;
      margin: 0 10px;
    }
  }

  a {
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }

  a.active {
    text-decoration: underline;
  }

  @media (max-width: 525px) {
    width: 100%;
    justify-content: center;
  }
`;

const Navigation = props => {
  function logout(e) {
    e.preventDefault();
    props.logout();
    props.history.push("/");
  }

  return (
    <NavigationContainer>
      <NavigationDiv>
        <LogoDiv>
          <h1>tippr</h1>
        </LogoDiv>
        <NavLinkDiv>
          <Link to="/">
            <h2>Home</h2>
          </Link>
          {props.userType === "employee" && (
            <Link to="/form">
              <h2>Update Profile</h2>
            </Link>
          )}
          <h2 onClick={e => logout(e)}>Sign Out</h2>
        </NavLinkDiv>
      </NavigationDiv>
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  userType: state.userReducer.userType
});

Navigation.propTypes = {
  history: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  userType: PropTypes.string
};

export default connect(
  mapStateToProps,
  { logout }
)(Navigation);

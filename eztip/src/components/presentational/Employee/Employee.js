import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const EmployeeProfileDiv = styled.div`
  margin: 0 auto;

  h1 {
      text-align: center;
      margin-bottom: 30px;
  }
`;

const ProfileInfoContainer = styled.div`
display: flex;
flex-direction: column;
width: 85%;
margin: 0 auto;
border: 1px solid #b5b5b5;
justify-content: space-evenly;
padding: 50px 20px;
background: white;
`;

const ProfileImgContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: center;
padding: 15px;

@media (max-width: 525px) {
    width: 100%;
}
`;

const ProfileInfoDiv = styled.div`
display: flex;

@media (max-width: 525px) {
  flex-direction: column;
}
`;

const ProfileStatsContainer = styled.div`
display: flex;
flex-direction: column;
width: 50%;
justify-content: center;
padding: 15px;

h2 {
    margin-bottom: 25px;
}

p {
    font-size: 2rem;
    margin-bottom: 10px;
}

button {
    max-width: 200px;
    margin-top: 20px;
}

@media (max-width: 525px) {
    width: 100%;
    align-items: center;
}
`;

const ProfileImg = styled.img`
  max-width: 300px;
  border-radius: 50%;
`;

const Tagline = styled.p`
font-style: italic;
`;

const Employee = props => {
  const routeToUpdateForm = e => {
    e.preventDefault();
    props.history.push("/form");
  };

  return (
    <EmployeeProfileDiv>
      <ProfileInfoContainer>
        <div>
          <h1>Hi there, {props.userInfo.first_name}!</h1>
        </div>
        <ProfileInfoDiv>
        <ProfileImgContainer>
        <ProfileImg
          alt={`${props.userInfo.first_name} ${props.userInfo.last_name}`}
          src={props.userInfo.profile_photo}
        />
      </ProfileImgContainer>

      <ProfileStatsContainer>
      <h2>
          {props.userInfo.first_name} {props.userInfo.last_name}
        </h2>
        <Tagline>{props.userInfo.tagline}</Tagline>
        <p>
          Working as a {props.userInfo.occupation} since{" "}
          {props.userInfo.working_since}
        </p>
        <button onClick={e => routeToUpdateForm(e)}>Update Profile</button>
      </ProfileStatsContainer>

        </ProfileInfoDiv>
      
      </ProfileInfoContainer>
    </EmployeeProfileDiv>
  );
};

Employee.propTypes = {
  userInfo: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    id: PropTypes.number,
    tagline: PropTypes.string,
    profile_photo: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    type_id: PropTypes.number,
    user_type: PropTypes.string,
    username: PropTypes.string,
     working_since: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }),
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};
export default Employee;

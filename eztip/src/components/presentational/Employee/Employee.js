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
  -webkit-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.15);

  h1 {
    font-size: 2.8rem;
  }
`;

const ProfileImgContainer = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const ProfileImgDiv = styled.div`
position: relative;
width: 250px;
height: 250px;
overflow: hidden;
border-radius: 50%;
`;

const ProfileInfoDiv = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const ProfileStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
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

  @media (max-width: 700px) {
    width: 100%;
    align-items: center;
  }
`;

const ProfileImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: auto;
  transform: translate(-50%,-50%);
`;

const Tagline = styled.p`
  font-style: italic;

  span {
    font-style: normal;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;

  button {
    margin: 20px 20px 10px 0;
    width: 45%;
  }

  @media (max-width: 825px) {
    margin-top: 20px;
    flex-direction: column;
    align-items: flex-start;

    button {
      margin: 10px 0;
      width: 75%;
    }

  }
    @media (max-width: 700px) {
      width: 100%;
      align-items: center;
    }
`;

const Employee = props => {
  const routeToUpdateForm = e => {
    e.preventDefault();
    props.history.push("/form");
  };

  return (
    <EmployeeProfileDiv>
      <ProfileInfoContainer>
          <h1>Hi there, {props.userInfo.first_name}!</h1>
        <ProfileInfoDiv>
          <ProfileImgContainer>
            <ProfileImgDiv>
              <ProfileImg
                alt={`${props.userInfo.first_name} ${props.userInfo.last_name}`}
                src={props.userInfo.profile_photo}
              />
            </ProfileImgDiv>
          </ProfileImgContainer>

          <ProfileStatsContainer>
            <h2>
              {props.userInfo.first_name} {props.userInfo.last_name}
            </h2>
            <Tagline><span>My tagline:</span> {props.userInfo.tagline}</Tagline>
            <p>
              Working as a {props.userInfo.occupation} since{" "}
              {props.userInfo.working_since}
            </p>
            <ButtonDiv>
            <button onClick={e => routeToUpdateForm(e)}>Update Profile</button>
            </ButtonDiv>

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
    profile_photo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type_id: PropTypes.number,
    user_type: PropTypes.string,
    username: PropTypes.string,
    working_since: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};
export default Employee;

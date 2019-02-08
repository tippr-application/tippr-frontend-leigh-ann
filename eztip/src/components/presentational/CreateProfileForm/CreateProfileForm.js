import React from "react";
import { createInfo, updateProfilePhoto } from "../../../store/actions";
import { connect } from "react-redux";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProfileFormContainer = styled.div`
border: 1px solid #b5b5b5;
margin: 0 auto;
margin-top: 15vh;
max-width: 600px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 40px;
background: white;

h1 {
  margin-bottom: 40px;
}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 80%;

  input {
    margin-bottom: 20px;

    &:last-of-type {
      padding-top: 8px;
    }
  }

`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 45%;
  }
`;

class CreateProfileForm extends React.Component {
  state = {
    userInfo: {
      first_name: "",
      last_name: "",
      occupation: "",
      tagline: "",
      working_since: "",
      profile_photo: "",
      username: null,
      // id: null,
      user_type: ""
    },
    id: null,
    selectedFile: null
  };

  componentDidMount() {
      this.setState({
          ...this.state,
          userInfo: {
              ...this.state.userInfo,
              username: this.props.registeredUsername,
              // id: this.props.registeredUserId,
              user_type: this.props.userType
              
          }
      })
  }

  handleChange = e => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  handleFile = e => {
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  createProfile = e => {
      e.preventDefault();
      const fd = new FormData();
    fd.append("image", this.state.selectedFile);
    if (this.state.selectedFile) {
      this.props.updateProfilePhoto(this.state.id, fd);
    }
    this.props.createInfo(this.state.userInfo);
    this.props.history.push("/");
  }

  render() {
    return (
      <ProfileFormContainer>
        <h1>Create Profile</h1>
        <Form 
              onSubmit={e=>this.createProfile(e)}
              method={"Post"}
              encType="multipart/form-data"
            >
              <input
                required
                autoComplete="off"
                type="text"
                name="first_name"
                value={this.state.userInfo.first_name}
                placeholder="First name"
                onChange={this.handleChange}
              />
              <input
                required
                autoComplete="off"
                type="text"
                name="last_name"
                value={this.state.userInfo.last_name}
                placeholder="Last name"
                onChange={this.handleChange}
              />
              <input
                required
                autoComplete="off"
                type="text"
                name="occupation"
                value={this.state.userInfo.occupation}
                placeholder="Occupation"
                onChange={this.handleChange}
              />
              <input
                required
                autoComplete="off"
                type="text"
                name="tagline"
                value={this.state.userInfo.tagline}
                placeholder="What's your tagline?"
                onChange={this.handleChange}
              />
              <input
                required
                autoComplete="off"
                type="text"
                name="working_since"
                value={this.state.userInfo.working_since}
                placeholder="Starting date of work"
                onChange={this.handleChange}
              />
              <input
                autoComplete="off"
                type="file"
                name="profile_photo"
                onChange={this.handleFile}
              />
              <ButtonDiv>
              <button type="submit">
                Create Profile
              </button>
              </ButtonDiv>
              </Form>
      </ProfileFormContainer>
    );
  }
}

const mapStateToProps = state => ({
    registeredUsername: state.userReducer.registeredUsername,
    registeredUserId: state.userReducer.registeredUserId,
    userType: state.userReducer.userType
})

CreateProfileForm.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  registeredUsername: PropTypes.string,
  // registeredUserId: PropTypes.oneOfType({
  //   PropTypes.string,
  //   PropTypes.number
  // })
};

export default connect(
  mapStateToProps,
  { createInfo, updateProfilePhoto }
)(CreateProfileForm);

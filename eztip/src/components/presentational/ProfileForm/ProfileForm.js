import React from "react";
import { connect } from "react-redux";
import { updateInfo, updateProfilePhoto } from "../../../store/actions";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProfileFormContainer = styled.div`
border: 1px solid #b5b5b5;
margin: 0 auto;
margin-top: 20vh;
max-width: 600px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 40px;
background: white;
-webkit-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.15);
-moz-box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.15);
box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.15);


@media (max-width: 700px ) {
  width: 85%;
}

h2 {
  margin-bottom: 40px;
  font-size: 2.8rem;
  text-align: center;
}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 80%;

  input {
    margin-bottom: 20px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 45%;
  }
`;

class ProfileForm extends React.Component {
  state = {
    userInfo: {
      first_name: "",
      last_name: "",
      occupation: "",
      tagline: "",
      working_since: "",
      profile_photo: ""
    },
    selectedFile: null
  };

  componentDidMount() {
    this.setState({
      userInfo: this.props.userInfo
    });
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  handleFile = e => {
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  conditionalSubmit = e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("image", this.state.selectedFile);
    if (this.state.selectedFile) {
      this.props.updateProfilePhoto(this.state.userInfo.id, fd);
    }
    this.props.updateInfo(this.state.userInfo.id, this.state.userInfo);
    this.props.history.push("/");
  };

  routeBack = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  render() {
    return (
      <ProfileFormContainer>
        <h2>Update Profile</h2>
        <Form
          onSubmit={e => this.conditionalSubmit(e)}
          method={this.props.loggedIn ? "Put" : "Post"}
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
            <button type="submit">Save</button>
            <button type="button" onClick={e => this.routeBack(e)}>
              Back
            </button>
          </ButtonDiv>
        </Form>
      </ProfileFormContainer>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn,
  userInfo: state.userReducer.userInfo
});

ProfileForm.propTypes = {
  history: PropTypes.object.isRequired,
  handleChange: PropTypes.func,
  submitInfo: PropTypes.func
};

export default connect(
  mapStateToProps,
  { updateInfo, updateProfilePhoto }
)(ProfileForm);

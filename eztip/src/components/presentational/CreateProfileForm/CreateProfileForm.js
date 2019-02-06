import React from "react";
import { createInfo, updateProfilePhoto } from "../../../store/actions";
import { connect } from "react-redux";

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
      id: null
    },
    selectedFile: null
  };

  componentDidMount() {
      this.setState({
          ...this.state,
          userInfo: {
              ...this.state.userInfo,
              username: this.props.registeredUsername,
              id: this.props.registeredUserId
              
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
      this.props.updateProfilePhoto(this.state.userInfo.id, fd);
    }
    this.props.createInfo(this.state.userInfo);
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        CreateProfileForm
        <form 
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
              <button type="submit">
                Create Profile
              </button>
              </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    registeredUsername: state.userReducer.registeredUsername,
    registeredUserId: state.userReducer.registeredUserId
})

export default connect(
  mapStateToProps,
  { createInfo, updateProfilePhoto }
)(CreateProfileForm);

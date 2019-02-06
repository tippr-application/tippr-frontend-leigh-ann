import React from "react";
import { connect } from "react-redux";
import { createInfo, updateInfo } from "../../../store/actions";
import PropTypes from "prop-types";

class ProfileForm extends React.Component {
  state = {
    userInfo: {
      first_name: "",
      last_name: "",
      occupation: "",
      tagline: "",
      working_since: "",
      profile_photo: ""
    }
  };

  componentDidMount() {
    this.setState({
      userInfo: this.props.userInfo
    });
  }

  handleChange = e => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  conditionalSubmit = e => {
    e.preventDefault();
    this.props.updateInfo(this.state.userInfo.id, this.state.userInfo);
    this.props.history.push("/");
  };

  routeBack = e => {
    e.preventDefault();
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <form>
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
            required
            autoComplete="off"
            type="text"
            name="profile_photo"
            value={this.state.userInfo.profile_photo}
            placeholder="Profile photo URL"
            onChange={this.handleChange}
          />
          <button type="submit" onClick={e => this.conditionalSubmit(e)}>
            Save
          </button>
          <button type="button" onClick={e => this.routeBack(e)}>
            Back
          </button>
        </form>
      </div>
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
  { createInfo, updateInfo }
)(ProfileForm);

import React from "react";

class ProfileForm extends React.Component {
    state = {
        userInfo: {
            firstName: "",
            lastName: "",
            employer: "",
            date: "",
            tagline: "",
            imageURL: ""
        }
    }

    handleChange = e => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value
            }
        })
    }

    submitInfo = e => {
        e.preventDefault();
    }

  render() {
    return (
      <div>
        <form>
          <input
            required
            autoComplete="off"
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={this.handleChange}
          />
          <input
            required
            autoComplete="off"
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={this.handleChange}
          />
          <input
            required
            autoComplete="off"
            type="text"
            name="employer"
            placeholder="Employer"
            onChange={this.handleChange}
          />
          <input
            required
            autoComplete="off"
            type="text"
            name="date"
            placeholder="Starting date of work"
            onChange={this.handleChange}
          />
          <input
            required
            autoComplete="off"
            type="text"
            name="tagline"
            placeholder="What's your tagline?"
            onChange={this.handleChange}
          />
          <input
            required
            autoComplete="off"
            type="text"
            name="imageURL"
            placeholder="Profile photo URL"
            onChange={this.handleChange}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default ProfileForm;

import React from "react";
import "./User.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import * as Constants from "./../constants";

class UserAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: { name: "", gender: "", email: "", status: "" } };
    this.save = this.save.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let newState = Object.assign({}, this.state);
    newState.user[event.target.id] = event.target.value;
    this.setState(newState);
  }

  save() {
    axios
      .post(Constants.API_URL + "users/", this.state.user, {
        headers: { Authorization: `Bearer ${Constants.BEARER_TOKEN}` },
      })
      .then((response) => {
        if (response.status === 201) {
          this.props.history.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="form-div">
        <h1>Add user </h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.user.name}
          />
        </div>
        <div>
          <label>Gender</label>
          <input
            type="text"
            id="gender"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.user.gender}
          />
        </div>
        <div>
          <label>E-mail</label>
          <input
            type="text"
            id="email"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.user.email}
          />
        </div>
        <div>
          <label>Status</label>
          <input
            type="text"
            id="status"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.user.status}
          />
        </div>
        <button className="button button-new" onClick={this.save}>
          Save
        </button>
      </div>
    );
  }
}

export default withRouter(UserAdd);

import React from "react";
import "./User.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import * as Constants from "./../constants";

class User extends React.Component {
  updateUser(id) {
    this.props.history.push("/users/edit/" + id);
  }
  deleteUser(id) {
    axios
      .delete(Constants.API_URL + "users/" + id, {
        headers: { Authorization: `Bearer ${Constants.BEARER_TOKEN}` },
      })
      .then((response) => {
        if (response.status === 200) {
          this.props.history.push("/");
        }
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <tr>
        <td>{this.props.user.name}</td>
        <td>{this.props.user.gender}</td>
        <td>{this.props.user.email}</td>
        <td>{this.props.user.status}</td>
        <td className="status-column">
          <button
            className="button button-edit"
            onClick={(e) => this.updateUser(this.props.user.id, e)}
          >
            Edit
          </button>
          <button
            className="button button-delete"
            onClick={(e) => this.props.deleteUser(this.props.user.id, e)}
          >
            Delete
          </button>
          <button className="button button-new" onClick={() => null}>
            See Posts
          </button>
        </td>
      </tr>
    );
  }
}

export default withRouter(User);

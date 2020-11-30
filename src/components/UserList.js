import React from "react";
import User from "./User";
import "./User.css";
import { withRouter } from "react-router-dom";

class UserList extends React.Component {
  addUser(e) {
    this.props.history.push("/users/add/");
  }

  render() {
    return (
      <div className="main-div">
        <button className="button button-new" onClick={(e) => this.addUser(e)}>
          Add User
        </button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>E-mail</th>
              <th>Status</th>
              <th className="status-column">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.contacts.map((c) => (
              <User key={c.id} user={c} deleteUser={this.deleteUser} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(UserList);

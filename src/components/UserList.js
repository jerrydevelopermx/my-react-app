import React from "react";
import User from "./User";
import "./User.css";
import { withRouter } from "react-router-dom";

class UserList extends React.Component {
  addUser(e) {
    this.props.history.push("/users/add/");
  }

  goToBlog() {
    this.props.history.push("/blog");
  }

  render() {
    return (
      <div className="main-div">
        <div className="control-div">
          <button
            id="addButton"
            className="button button-new"
            onClick={(e) => this.addUser(e)}
          >
            Add User
          </button>
          <button
            id="blogButton"
            className="button button-blog"
            onClick={() => this.goToBlog()}
          >
            Go to Blog Page
          </button>
        </div>

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

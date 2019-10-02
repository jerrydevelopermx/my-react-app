import React from "react";
import User from "./User";
import "./User.css";
import { Route , withRouter} from 'react-router-dom';

class UserList extends React.Component {
  constructor(props){
    super(props);
  }
  addUser(e) {
    this.props.history.push('/users/add/')
  }
  render() {
    return (
    <div className="main-div">
      <button className="button button-new" onClick={(e) => this.addUser(e)}>Add User</button>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last name</th>
              <th>E-mail</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.contacts.map(c => <User key={c.id} user={c} />)}
          </tbody>
        </table>
    </div>)
  }

}

export default withRouter(UserList);

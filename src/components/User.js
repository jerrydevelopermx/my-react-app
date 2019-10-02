import React from "react";
import "./User.css";
import axios from "axios";
import { Route , withRouter} from 'react-router-dom';
import * as Constants from './../constants';


class User extends React.Component {

  constructor(props){
    super(props)
  }
  updateUser(id) {
    this.props.history.push('/users/edit/' + id)
  }
  deleteUser(id){
    axios
      .delete(Constants.API_URL + '/users/' + id)
        .then(response => {
          if(response.status == 200){
            this.props.history.push('/')
          }
      })
      .catch(error => console.log(error));
  }

  render() {
    return  (<tr>
              <td>{this.props.user.name}</td>
              <td>{this.props.user.lastname}</td>
              <td>{this.props.user.email}</td>
              <td>
                <button className="button button-edit" onClick={(e) => this.updateUser(this.props.user.id, e)}>Edit</button>
                <button className="button button-delete" onClick={(e) => this.deleteUser(this.props.user.id, e)}>Delete</button>
              </td>
            </tr>)
  }
}

export default withRouter(User);

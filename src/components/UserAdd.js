import React from "react";
import "./User.css";
import axios from "axios";
import { Route , withRouter} from 'react-router-dom';
import * as Constants from './../constants';


class UserAdd extends React.Component {

  constructor(props){
    super(props);
     this.state = {user: { firstname: '', lastname: '', email: ''}};
     this.save = this.save.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let newState = Object.assign({}, this.state);
      newState.user[event.target.id] = event.target.value;
      this.setState(newState);
  }

  save(){
    axios.post(Constants.API_URL + '/users/', this.state.user)
          .then(response => {
            if(response.status == 201){
              this.props.history.push('/')
            }
          })
          .catch(error => {
            console.log(error)
          })
  }

  render() {
    return(<div className="form-div">
            <h1>Add user </h1>
            <div>
                <label >Name</label>
                <input type="text"
                   id="firstname"
                   className="form-control"
                   onChange={this.handleChange}
                   value={this.state.user.firstname}/>
            </div>
            <div >
                <label >Last name</label>
                <input type="text"
                   id="lastname"
                   className="form-control"
                    onChange={this.handleChange}
                   value={this.state.user.lastname}/>
            </div>
            <div >
                <label >E-mail</label>
                <input type="text"
                   id="email"
                   className="form-control"
                   onChange={this.handleChange}
                   value={this.state.user.email}/>
            </div>
            <button className="button button-new" onClick={this.save}>Save</button>
          </div>)
    }
}

export default withRouter(UserAdd);

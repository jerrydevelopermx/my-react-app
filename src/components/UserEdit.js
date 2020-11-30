import React from "react";
import "./User.css";
import axios from "axios";
import { withRouter } from "react-router-dom";
import * as Constants from "./../constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class UserEdit extends React.Component {
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
      .put(
        Constants.API_URL + "users/" + this.props.match.params.id,
        this.state.user,
        { headers: { Authorization: `Bearer ${Constants.BEARER_TOKEN}` } }
      )
      .then((response) => {
        if (response.status === 200) {
          toast.success("User updated correctly", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: false,
          });
          setTimeout(() => this.props.history.push("/"), 1300);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidMount() {
    axios
      .get(Constants.API_URL + "/users/" + this.props.match.params.id)
      .then((response) => {
        this.setState({ user: response.data.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="form-div">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
        <h1>Edit user </h1>
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
          <label>Status</label>
          <input
            type="text"
            id="status"
            className="form-control"
            onChange={this.handleChange}
            value={this.state.user.status}
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
        <button className="button button-new" onClick={this.save}>
          Save
        </button>
      </div>
    );
  }
}

export default withRouter(UserEdit);

import React from "react";
import UserList from "./components/UserList";
import axios from "axios";
import * as Constants from "./constants";

class App extends React.Component {
  // default State object
  state = {
    users: [],
  };
  // default State object
  componentDidMount() {
    axios
      .get(Constants.API_URL + "users")
      .then((response) => {
        // create an array of contacts only with relevant data
        const newUsers = response.data.data.map((c) => {
          return {
            id: c.id,
            name: c.name,
            lastname: c.name,
            email: c.email,
            gender: c.gender,
            status: c.status,
          };
        });
        // create a new "State" object without mutating
        // the original State object.
        const newState = Object.assign({}, this.state, {
          users: newUsers,
        });
        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <UserList contacts={this.state.users} />
      </div>
    );
  }
}

export default App;

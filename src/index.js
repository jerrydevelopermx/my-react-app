import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserEdit from "./components/UserEdit";
import UserAdd from "./components/UserAdd";
import "./App.css";
import "./index.css";

import { Route, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <header className="App-header">
        <h3 className="App-title"> React JS - Users management </h3>
      </header>
      <Route exact path="/" component={App} />
      <Route path="/users/edit/:id" component={UserEdit} />
      <Route path="/users/add" component={UserAdd} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

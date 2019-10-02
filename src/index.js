import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserEdit from './components/UserEdit';
import UserAdd from './components/UserAdd';
import logo from './logo.svg';
import './App.css';
import './index.css';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    <div>
      <header className="App-header">
        <h3> React JS </h3>
        <img src={logo} className="App-logo" alt="logo" width="120"/>
        <h4 className="App-title">Welcome to our Contact Manager</h4>
      </header>
      <Route exact path="/" component={App} />
      <Route path="/users/edit/:id" component={UserEdit} />
      <Route path="/users/add" component={UserAdd} />

    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

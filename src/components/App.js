import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Form/Home/Home";
import Login from "./Form/Login";
import Regester from "./Form/Regester";
import Nab from "./nav/Nab";
export default class App extends Component {
  state = {
    islogin : false
  }
  render() {
    return (
      <div>
        <Router>
          <Nab login={this.state}></Nab>
          <Route login={this.state} path="/" exact component={Home} />
          <Route login={this.state} path="/regester" exact component={Regester} />
          <Route login={this.state} path="/login" exact component={Login} />
        </Router>
      </div>
    );
  }
}

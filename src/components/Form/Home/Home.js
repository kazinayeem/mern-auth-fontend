import axios from "axios";
import React, { Component } from "react";

export default class Home extends Component {
  state = {
    name: [],
    app: false,
   
    
  };

  componentDidMount() {
    setTimeout(() => {
      this.logout();
    }, 8.64e+7);

    axios
      .get("http://localhost:4000/get", {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      })
      .then((res) =>
        this.setState({
          ...this.state,
          name: res.data.user,
        })
        
      )
      .catch((err) => {
        console.log(err);
      });
  }

  logout = () => {
    window.localStorage.removeItem("token");

    this.props.history.push("/login");
  };

  render() {
    let auth;
    if (window.localStorage.getItem("token")) {
      return (
        <div>
          <button className="btn btn-danger" onClick={this.logout}>logout</button>

          <h3>{this.state.name.name}</h3>
          <h4>{this.state.name.email}</h4>
        </div>
      );
    } else {
      this.props.history.push("/login");
    }

    return (
      <div>
        <h1 className="text-center m-auto">Home page</h1>

        {auth}

        <div></div>
      </div>
    );
  }
}

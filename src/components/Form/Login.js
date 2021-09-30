import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login({login}) {
 
  const [user, setuser] = useState({
    email: "",
    password: "",
    error: null,
  });

  let history = useHistory();
  const { email, password, error } = user;
  const onchangeHadeler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuser({
      ...user,
      [name]: value,
    });
  };

  const onsubmithandeler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", res.data.token);
      history.push("/");
      
      
     
    } catch (error) {
      setuser({
        ...user,
        error: error.response.data.error,
      });
    }
  };

  return (
    <div>
      <h1 className="text-center m-auto">Login </h1>
      <br />
      <div className="card" style={{ width: "600px", margin: "auto" }}>
        <form onSubmit={onsubmithandeler}>
          <div className="form-group">
            <label>Email address</label>
            <input
              value={email}
              name="email"
              onChange={onchangeHadeler}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <br />
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              value={password}
              onChange={onchangeHadeler}
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <h2>{error ? <h2>{error}</h2> : null}</h2>
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

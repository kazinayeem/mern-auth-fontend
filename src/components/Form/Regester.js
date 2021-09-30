import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Regester() {
  let history = useHistory();
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });
  const onchangeHadeler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setuser({
      ...user,
      [name]: value,
    });
  };

  const { name, email, password } = user;

  const onsubmithandeler = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:4000/regester",
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      history.push("/login");
    } catch (error) {
      setuser({
          ...user,
          message : "user was already exit"
      })
    }
  };

  return (
    <div>
      <h1 className="text-center m-auto">Sign up user </h1>
      <br />
      <div className="card" style={{ width: "600px", margin: "auto" }}>
        <form onSubmit={onsubmithandeler}>
          <div className="form-group">
            <label>Name</label>
            <input
              value={name}
              type="text"
              name="name"
              required
              className="form-control"
              placeholder="Enter name"
              onChange={onchangeHadeler}
            />

            <br />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              value={email}
              type="email"
              name="email"
              required
              className="form-control"
              placeholder="email"
              onChange={onchangeHadeler}
            />
          </div>

          <br />
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              required
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={onchangeHadeler}
            />
          </div>
          <br />

          <h1 className="text-danger">{user.message}</h1>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

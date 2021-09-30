import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nab(props) {
  console.log(props);
  
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
                      Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" style={{ textDecoration: "none" }}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  activeStyle={{
                    fontWeight: "bold",
                    textDecoration: "wavy overline lime",
                    color: "red",
                  }}
                  exact="true"
                  to="/"
                >
                  Home
                </NavLink>{" "}
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{ textDecoration: "none" }}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  exact="true"
                  activeStyle={{
                    fontWeight: "bold",
                    textDecoration: "wavy overline lime",
                    color: "red",
                  }}
                  to="/regester"
                >
                  Sign up
                </NavLink>
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" style={{ textDecoration: "none" }}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  activeStyle={{
                    fontWeight: "bold",
                    textDecoration: "wavy overline lime",
                    color: "red",
                  }}
                  exact="true"
                  to="/login"
                >
                  Log in
                </NavLink>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

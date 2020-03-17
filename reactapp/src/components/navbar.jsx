import React from "react";
import Posts from "./postss";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Navbar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-light">
        <NavLink className="navbar-brand" to="/">
          MoviesApp
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            {props.isLoggedIn && (
              <li className="nav-item ">
                <NavLink className="nav-link" to="/movies">
                  MOVIES
                </NavLink>
              </li>
            )}
            {props.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
            )}
            {props.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/employee">
                  Employee
                </NavLink>
              </li>
            )}
            {props.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/postss">
                  Posts
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="navbar-nav">
            {!props.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  LOGIN
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="navbar-nav">
            {props.isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  onClick={() => props.setLogin(false)}
                  className="nav-link"
                  to="/logout"
                >
                  LOGOUT
                </NavLink>
              </li>
            )}
          </ul>

          <ul className="navbar-nav">
            {!props.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/registration">
                  Registration
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

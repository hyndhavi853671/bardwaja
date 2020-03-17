import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <NavLink className="navbar-brand" to="#">
          Todos
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            {props.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/todos">
                  Todo
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="navbar-nav justify-right">
            {!props.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            )}
            {props.isLoggedIn && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  onClick={() => props.setLogin(false)}
                  to="/logout"
                >
                  Logout
                </NavLink>
              </li>
            )}
            {!props.isLoggedIn && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

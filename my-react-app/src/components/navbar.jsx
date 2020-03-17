//statless function component
//sfc
import React from "react";
const NavBar /*funtion*/ = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </div>
        </div>
        <i className="fas fa-shopping-cart"></i>
        <span className="badge badge-primary badge-pill">
          {props.totalitems}
        </span>
      </nav>
    </div>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
const Logout = () => {
  return (
    <div clas="text-center">
      <h1>you have been logged out successfully</h1>
      <p className="small">
        click<Link to="/login">here</Link>to login again
      </p>
    </div>
  );
};

export default Logout;

import React from "react";
import { Link } from "react-router-dom";

const Logout = props => {
  return (
    <div>
      <h3 className="text-center mt-5">
        You have been logged out successfully!
      </h3>
      <p className="small text-center">
        click <Link to="/login">here</Link>to login again
      </p>
    </div>
  );
};

export default Logout;

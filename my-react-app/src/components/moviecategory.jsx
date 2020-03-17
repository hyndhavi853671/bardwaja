import React, { Component } from "react";
class Category extends Component {
  state = {
    categories: [{ gener: "Action" }, { gener: "Adventures" }]
  };
  render() {
    return (
      <div>
        <h1>CATEGORY</h1>
        <table className="table">
          <thead>
            <th>CATEGORY</th>
          </thead>
        </table>
      </div>
    );
  }
}

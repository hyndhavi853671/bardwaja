import React, { Component } from "react";
//import { findDOMNode } from "react-dom";
class HelloWorld extends Component {
  state = {
    count: 0,
    //links: ["link1", "link2", "link3"]
    links: [
      { id: 1, name: "google", url: "https://www.google.com" },
      { id: 2, name: "yahoo", url: "https://www.yahoo.com" },
      { id: 3, name: "instagram", url: "https://www.instagram.com" }
    ],

    students: [
      { rollno: 101, name: "geetha", age: 19, std: 5 },
      { rollno: 102, name: "hyndhu", age: 20, std: 5 },
      { rollno: 103, name: "ram", age: 21, std: 5 },
      { rollno: 104, name: "sita", age: 22, std: 5 }
    ]
  };
  //links: [
  //{ id: 1, name: "google", url: "https://google.com"
  styles = {
    marginright: "20px",
    fontSize: "15px",
    fontFamily: "cursive",
    padding: "20px"
  };
  render() {
    if (this.state.students.length == 0) {
      return <p className="alert alert-danger">not found</p>;
    }
    return (
      <div>
        <ul>
          {this.state.links.map(link => (
            <li>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
        <h1>helloworld</h1>
        <button
          style={this.styles}
          className="btn btn-warning"
          onClick={this.inc}
        >
          increment
        </button>

        <span
          className="badge badge-primary"
          style={{ padding: "20px", fontSize: "32px" }}
          //className="btn btn-secondary"
        >
          {this.state.count}
        </span>
        <button
          style={this.styles}
          className="btn btn-warning"
          onClick={this.dec}
        >
          decrement
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Rollno</th>
              <th>Name</th>
              <th>Age</th>
              <th>standard</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map(student => (
              <tr key={student.rollno}>
                <td>{student.rollno}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.std}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.delete(student)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  delete = student => {
    const students = this.state.students.filter(
      std => student.rollno !== std.rollno
    );

    this.setState({ students });
  };
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  dec = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
}
export default HelloWorld;
//

//child
import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 100
  };
  render() {
    //const {id, value}
    console.log(this.props.id, this.props.count); //props object we can access the parent properties
    const {
      id,
      value,
      handleDecrement,
      handleIncrement,
      handleDelete
    } = this.props;
    return (
      <div>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDecrement(id)}
          disabled={value == 0 ? "diabled" : ""}
        >
          -
        </button>
        {/*<span className="badge badge-primary">{className}</span>*/}
        <span className="badge badge-primary">{value}</span>
        <button
          className="btn btn-warning btn-sm"
          onClick={() => handleIncrement(id)}
        >
          +
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDelete(id)}
        >
          del
        </button>
      </div>
    );
  }
}
export default Counter;

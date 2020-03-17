import React, { Component } from "react";
class BookDetails extends Component {
  state = {};
  handleback = () => {
    this.props.history.push("/books");
  };
  render() {
    return (
      <div>
        <h1>book details</h1>
        <h1>selected book #{this.props.match.params._id}</h1>
        <h1 className="text-center text-danger">
          {this.props.location.state.book.title}
        </h1>
        <button onClick={this.handleback} className="btn btn-primary">
          back
        </button>
      </div>
    );
  }
}
export default BookDetails;

import React, { Component } from "react";
class MovieDetails extends Component {
  state = {};
  handleback = () => {
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <h1>booking for the show details about the movie</h1>
        <h1>selected movie #{this.props.match.params._id}</h1>
        <h1 className="text-center text-danger">
          {this.props.location.state.movie.title}
        </h1>
        <button onClick={this.handleback} className="btn btn-primary">
          back
        </button>
      </div>
    );
  }
}

export default MovieDetails;

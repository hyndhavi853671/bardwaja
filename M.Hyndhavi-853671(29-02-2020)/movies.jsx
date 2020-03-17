import React, { Component } from "react";
//import { findDOMNode } from "react-dom";
class Movies extends Component {
  state = {
    movie: [
      {
        title: "Terminator",
        genre: "Action",
        numberInStock: 6,
        dailyRentalRate: 2.5
      },
      {
        title: "Die Hard",
        genre: "Action",
        numberInStock: 5,
        dailyRentalRate: 4
      },
      {
        title: "Get Out",
        genre: "Thriller",
        numberInStock: 8,
        dailyRentalRate: 3
      },
      {
        title: "Trip to Italy",
        genre: "Comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5
      },
      {
        title: "Airplane",
        genre: "Comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5
      },
      {
        title: "Jumanji",
        genre: "Animation",
        numberInStock: 7,
        dailyRentalRate: 3.5
      },
      {
        title: "Toy Story",
        genre: "Thriller",
        numberInStock: 7,
        dailyRentalRate: 4.5
      },
      {
        title: "The Sixth Sense",
        genre: "Thriller",
        numberInStock: 4,
        dailyRentalRate: 3.5
      },
      {
        title: "The Avengers",
        genre: "Action",
        numberInStock: 7,
        dailyRentalRate: 3.5
      }
    ]
  };

  render() {
    if (this.state.movie.length === 0) {
      return <p className="alert alert-danger">SHOWS ARE NOT AVAILABLE</p>;
    }
    return (
      <div style={(backgroundColor = "blue")}>
        <p>total no.of movies:{this.state.movie.length}</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>NumberInStock</th>
              <th>dailyRentalRate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movie.map(movie => (
              <tr key={movie.NumberInStock}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.delete(movie)}
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
  delete = movie => {
    const movies = this.state.movie.filter(
      mov => movie.numberInStock !== mov.numberInStock
    );
    this.setState({ movie: movies });
  };
}
export default Movies;

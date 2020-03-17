import React, { Component } from "react";
import Movie from "./movie";
import Category from "./category";
import Pagination from "./pagination";
import _ from "lodash";

import image1 from "../components/image1.jpg";
import image2 from "../components/image2.jpg";
import image3 from "../components/image3.jpg";
import image4 from "../components/image4.jpg";
import image5 from "../components/image5.jpg";
import image6 from "../components/image6.jpg";
import image7 from "../components/image7.jpg";
import image8 from "../components/image8.jpg";
import image9 from "../components/image9.png";
import { Link } from "react-router-dom";
class Movies extends Component {
  state = {
    style: [{ backgroundColour: "pink" }],
    movies: [
      {
        _id: "121",
        title: "Terminator",
        genre: "Action",
        numberInStock: 6,
        dailyRentalRate: 2.5,
        image: image1
      },
      {
        _id: "122",
        title: "Die Hard",
        genre: "Action",
        numberInStock: 5,
        dailyRentalRate: 4,
        image: image2
      },
      {
        _id: "123",
        title: "Get Out",
        genre: "Thriller",
        numberInStock: 8,
        dailyRentalRate: 3,
        image: image3
      },
      {
        _id: "124",
        title: "Trip to Italy",
        genre: "Comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5,
        image: image4
      },
      {
        _id: "125",
        title: "Airplane",
        genre: "Comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5,
        image: image5
      },
      {
        _id: "126",
        title: "Jumanji",
        genre: "Animation",
        numberInStock: 7,
        dailyRentalRate: 3.5,
        image: image6
      },
      {
        _id: "127",
        title: "Toy Story",
        genre: "Thriller",
        numberInStock: 7,
        dailyRentalRate: 4.5,
        image: image7
      },
      {
        _id: "128",
        title: "The Sixth Sense",
        genre: "Thriller",
        numberInStock: 4,
        dailyRentalRate: 3.5,
        image: image8
      },
      {
        _id: "129",
        title: "The Avengers",
        genre: "Action",
        numberInStock: 7,
        dailyRentalRate: 3.5,
        image: image9
      }
    ],
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Thriller" },
      { id: 3, name: "Animation" },
      { id: 4, name: "Comedy" }
    ],
    selectedGenre: 1,
    pageSize: 2,
    selectedPge: 1
  };
  handleSelectedGenre = genre => {
    console.log(genre);
    this.setState({ selectedGenre: genre.id });
  };
  handlePageSelect = page => {
    this.setState({ selectedPage: page });
  };
  paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items) // converts items into lodash obj
      .slice(startIndex)
      .take(pageSize)
      .value();
  };
  render() {
    const { genres } = this.state;
    const { selectedGenre } = this.state;
    // filtering movies based on genre
    const genre = genres.filter(genre => genre.id === selectedGenre);

    const filteredMovies = this.state.movies.filter(
      movie => movie.genre === genre[0].name
    );

    const paginatedMovies = this.paginate(
      filteredMovies,
      this.state.selectedPage,
      this.state.pageSize
    );
    return (
      <div>
        <div className="row">
          <div className="col-3">
            <Category
              genres={genres}
              selectedGenre={this.state.selectedGenre}
              handleSelectedGenre={this.handleSelectedGenre}
            />
          </div>
          <div className="col-6">
            {paginatedMovies.map(movie => (
              <Link
                to={{ pathname: `/movies/${movie._id}`, state: { movie } }}
                style={{ textDecoration: "none" }}
              >
                <Movie movie={movie} />
              </Link>
            ))}
          </div>
        </div>
        <Pagination
          pageSize={this.state.pageSize}
          totalMovies={filteredMovies.length}
          selectedPage={this.state.selectedPage}
          handlePageSelect={this.handlePageSelect}
        />
      </div>
    );
  }
}
export default Movies;

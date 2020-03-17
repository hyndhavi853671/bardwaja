import React from "react";
const Movie = props => {
  return (
    <div>
      <div className="row shadow mb-3 mt-3">
        <div className="col-2 mr-7 pl-0">
          <img src={props.movie.image} height="100" width="100" />
        </div>
        <div className="col">
          {props.movie.title} | {props.movie.genre}|{props.movie.numberInStock}|
          {props.movie.dailyRentalRate}
        </div>
      </div>
    </div>
  );
};
export default Movie;

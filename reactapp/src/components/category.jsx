import React from "react";
const Category = props => {
  return (
    <div className="mt-5 ml-3">
      <ul className="list-group">
        {props.genres.map(genre => (
          <li
            onClick={() => props.handleSelectedGenre(genre)}
            key={genre.id}
            className={
              genre.id === props.selectedGenre
                ? "list-group-item bg-success"
                : "list-group-item"
            }
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
/*<div className="mr-5 mt-3">
      <table className="table">
        <div class="list-group">
          <button type="button" class="list-group-item list-group-item-action ">
            Action
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            Adventures
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            Thriller
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            Comdey
          </button>
          <button type="button" class="list-group-item list-group-item-action">
            Horror
          </button>
        </div>
      </table>
    </div>
  );
};*/
export default Category;

import React from "react";
const Book = props => {
  return (
    <div>
      <div className="row shadow mb-3 mt-3">
        <div className="col-2 mr-7 pl-0">
          <img src={props.book.image} alt="" height="100" width="100" />
        </div>
        <div className="col">
          {props.book.title}|{props.book.authors}|{props.book.categories}
        </div>
      </div>
    </div>
  );
};
export default Book;

import React from "react";
const Category = props => {
  return (
    <div className="mt-5 ml-3">
      <ul className="list-group">
        {props.category.map(cate => (
          <li
            onClick={() => props.handleSelectedCate(cate)}
            key={cate.id}
            className={
              cate.id === props.selectedCate
                ? "list-group-item bg-success"
                : "list-group-item"
            }
          >
            {cate.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Category;

import React from "react";
import Input from "./input";
const UpdatePost = props => {
  return (
    <div>
      <form onSubmit={props.UpdatePost} className="w-50 mt-5 mx-auto">
        <div className="form-group">
          <Input
            inputName="id"
            value={props.postss.id}
            type="number"
            handleInputField={props.handleInputField}
            label="Id"
          />
        </div>
        <div className="form-group">
          <Input
            inputName="title"
            value={props.postss.id}
            type="text"
            handleInputField={props.handleInputField}
            label="title"
          />
        </div>
        <div className="form-group">
          <Input
            inputName="body"
            value={props.postss.id}
            type="text"
            handleInputField={props.handleInputField}
            label="body"
          />
        </div>
        <button className="btn btn-block btn-outline btn-secondary">
          cancel
        </button>
        <button className="btn btn-block btn-outline btn-primary">save</button>
      </form>
    </div>
  );
};
export default UpdatePost;

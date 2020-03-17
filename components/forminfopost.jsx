import React, { Component } from "react";
import Postss from "./postss";
import Input from "./input";
const FormInfoPost = props => {
  // const posts={props.posts};
  return (
    <div>
      <form className="w-50 mx-auto mt-5 pt-0">
        <p className="h3 bg-primary text-white text-center p-3">
          Posts Details
        </p>
        <div className="form-group">
          <Input
            inputName="id"
            value={props.posts.id}
            type="number"
            handleInputField={props.handleInputField}
            label="ID"
            disabled="true"
            //error={thempId}
          />
        </div>
        <div className="form-group">
          <Input
            inputName="title"
            value={props.posts.title}
            type="text"
            handleInputField={props.handleInputField}
            label="Title"

            //error={this.state.errors.empName}
          />
        </div>
        <div className="form-group">
          <Input
            inputName="body"
            value={props.posts.body}
            type="text"
            handleInputField={props.handleInputField}
            label="Email ID"

            //error={this.state.errors.email}
          />
        </div>
      </form>
    </div>
  );
};

export default FormInfoPost;

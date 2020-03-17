import React from "react";
import Input from "./input";
const TodoAddPost = props => {
  const { userId, id, title, completed, addTodo, handleInputField } = props;
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Todo Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="w-75 mx-auto  pt-0">
                <Input
                  inputName="userId"
                  value={userId}
                  type="number"
                  handleInputField={handleInputField}
                  label="UserId"
                />
                <Input
                  inputName="id"
                  value={id}
                  type="number"
                  handleInputField={handleInputField}
                  label="Id"
                />
                <Input
                  inputName="title"
                  value={title}
                  type="text"
                  handleInputField={handleInputField}
                  label="Title"
                />
                <Input
                  inputName="completed"
                  value={completed}
                  type="text"
                  handleInputField={handleInputField}
                  label="Status"
                />

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit "
                    data-dismiss="modal"
                    className="btn btn-primary"
                    onClick={addTodo}
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoAddPost;

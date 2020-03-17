import React from "react";
import TodoAddModal from "./todoaddmodal";
import TodoUpdateModal from "./updatetodo";

const TodoTable = props => {
  const {
    todos,
    todo,
    addTodo,
    deleteTodo,
    getTodo,
    updatedTodo,
    handleInputField,
    handleCompletedStatus,
    handlePendingStatus
  } = props;
  return (
    <div>
      <div className="text-center">
        <button
          className="btn btn-warning ml-5 mt-3 p-2 align-center"
          data-toggle="modal"
          data-target="#exampleModal1"
        >
          Add Todo
        </button>
        <TodoAddModal
          todo={todo}
          handleInputField={handleInputField}
          addTodo={addTodo}
        />
      </div>
      <div className="text-center">
        <button
          type="button"
          onClick={handleCompletedStatus}
          className="btn btn-success"
        >
          Completed
        </button>
        <button
          type="button"
          onClick={handlePendingStatus}
          className="btn btn-danger m-2"
        >
          Pending
        </button>
      </div>
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <table className="table">
            <thead>
              <tr className="table-success">
                <th>Id</th>
                <th>Title</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(to => (
                <tr>
                  <td>{to.id}</td>
                  <td>{to.title}</td>
                  <td>{to.completed.toString()}</td>
                  <td>
                    <button
                      onClick={() => getTodo(to.id)}
                      className="btn btn-secondary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Update
                    </button>
                    <TodoUpdateModal
                      todo={todo}
                      updatedTodo={updatedTodo}
                      handleInputField={handleInputField}
                    />
                    <br></br>
                    <button
                      onClick={() => deleteTodo(to)}
                      className="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoTable;

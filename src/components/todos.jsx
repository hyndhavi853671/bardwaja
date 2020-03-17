import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import TodoTable from "./todos-table";
import Pagination from "react-js-pagination";

const baseUrl = "https://jsonplaceholder.typicode.com";
class Todos extends Component {
  constructor() {
    super();
    console.log("inside constructor");
  }
  state = {
    todos: [],
    todo: { userId: "", id: "", title: "", completed: "" },
    status: [],
    activePage: 1,
    pageSize: 10
  };

  async componentDidMount() {
    console.log("inside componentDidMount");
    const promise = await axios.get(baseUrl + "/todos");
    console.log(promise);
    this.setState({ todos: promise.data });
    this.setState({ status: promise.data });
  }
  componentDidUpdate() {
    console.log("inside componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("inside componentWillUnmount");
  }
  addTodo = async () => {
    console.log("Inside addTodo");
    //const obj = {userId: 200,id: 123, title: "New Title", body: "akdjhaskjdnsakfbdajksdfhajbfdfhakfjkasdf"};
    console.log(this.state.todo);
    const obj = this.state.todo;
    const response = await axios.post(baseUrl + "/todos", obj);
    console.log("response", response.data);

    const todos = [obj, ...this.state.todos];
    console.log(this.state.todos);
    this.setState({ todos });
  };

  getTodo = id => {
    //console.log("inside getPost");
    const todo = this.state.todos.filter(t => t.id === id);
    //console.log("post", post);
    this.setState({ todo: todo[0] });
  };
  updateTodo = async event => {
    console.log("inside updatePost");

    const todo = this.state.todo;

    const response = await axios.put(baseUrl + "/todos/" + todo.id, todo);

    console.log(response);
    const indx = this.state.todos.indexOf(todo);
    const todos = this.state.todos;
    todos[indx] = response.data;
    this.setState({ todos });
  };

  deleteTodo = async todo => {
    //console.log("inside deletepost");
    const originalTodos = this.state.todos;
    const todos = this.state.todos.filter(t => t.id !== todo.id);
    this.setState({ todos });
    try {
      await axios.delete(baseUrl + "/todos/" + todo.id);
    } catch (err) {
      console.log("Error :", err);
      if (err.response && err.response.status == 200) {
        alert("Post has already been deleted");
      } else {
        alert("Network error");
        this.setState({ todos: originalTodos });
      }
    }
  };
  handleInputField = event => {
    console.log("inside handleInputField");
    const todo = this.state.todo;
    const { name, value } = event.currentTarget;
    todo[name] = value;
    console.log("todo", todo);
    this.setState({ todo });
  };

  handleCompletedStatus = () => {
    console.log("inside completedstatus");
    const todos = this.state.status.filter(t => t.completed === true);
    console.log(todos);
    this.setState({ todos });
  };

  handlePendingStatus = () => {
    const todos = this.state.status.filter(t => t.completed === false);
    console.log(todos);
    this.setState({ todos });
  };

  handlePageChange(pageNumber) {
    //console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }
  paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    //console.log(startIndex);
    return _(items) // converts items into lodash obj
      .slice(startIndex)
      .take(pageSize)
      .value();
  };

  render() {
    console.log("inside render");
    const paginatedTodos = this.paginate(
      this.state.todos,
      this.state.activePage,
      this.state.pageSize
    );
    return (
      <div>
        <TodoTable
          todos={paginatedTodos}
          todo={this.state.todo}
          addTodo={this.addTodo}
          deleteTodo={this.deleteTodo}
          getTodo={this.getTodo}
          updateTodo={this.updateTodo}
          handleInputField={this.handleInputField}
          handleCompletedStatus={this.handleCompletedStatus}
          handlePendingStatus={this.handlePendingStatus}
        />

        <div className="float-right">
          <Pagination
            itemClass="page-item"
            linkClass="page-link"
            hideDisabled
            activePage={this.state.activePage}
            itemsCountPerPage={this.state.pageSize}
            totalItemsCount={this.state.todos.length}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}
          />
        </div>
      </div>
    );
  }
}
export default Todos;

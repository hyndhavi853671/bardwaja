import React, { Component } from "react";
import Input from "./input";
import { Link } from "react-router-dom";
//creating ref object

class Login extends Component {
  state = {
    account: {
      username: "",
      password: ""
    },
    errors: {}
  };
  handleFormSubmit = event => {
    event.preventDefault();
    //console.log(this.username.current.value);
    const errors = {};
    const { username, password } = this.state.account;
    console.log(username);
    console.log(password);

    if (username.trim() === "") errors.username = "username is required";
    if (password.trim() === "") errors.password = "password is required";

    // console.log(errors);
    this.setState({ errors });
    if (username === "testuser" && password === "abc@123") {
      this.props.history.replace("/home");
    } else {
      alert("enter valid credentials");
    }
  };
  handleInputField = event => {
    const account = this.state.account;
    //console.log(event.currentTarget.name);
    //console.log(event.currentTarget.value);

    account[event.currentTarget.name] = event.currentTarget.value;
    //account.username;
    //account[username];
    //console.log(account);
    this.setState({ account: account });
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.handleFormSubmit}
          className="w-50 mx-auto border border-rounded mt-5 p-3"
        >
          <p className="h1">Login from</p>
          <div className="form-group">
            {/*<label htmlFor="username">username</label>*/}
            <Input
              inputName="username"
              type="text"
              value={this.state.account.username}
              handleInputField={this.handleInputField}
              label="username"
              error={this.state.errors.username}

              //id="username"
              //placeholder="username"
              //className="form-control"
              //onChange={this.handleInputField}
            />
          </div>
          <div className="form-group">
            {/*<label htmlFor="password">Password*</label>*/}
            <Input
              inputName="password"
              value={this.state.account.password}
              type="password"
              handleInputField={this.handleInputField}
              label="password"
              error={this.state.errors.password}
              //id="password"
              // placeholder="password"
              // className="form-control"
              //onChange={this.handleInputField}
            />
          </div>

          <center>
            <button onClick={() => this.props.setLogin(true)} value="Login">
              Login
            </button>
            <p className="btn btn-primary btn-block p-3">
              Dont have an account?Register
              <Link to="/registration">here</Link>
            </p>
          </center>
        </form>
      </div>
    );
  }
}

export default Login;

import React, { Component } from "react";
import NavBar from "./components/navbar";
import Todos from "./components/todos";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Redriect, Redirect } from "react-router-dom";
import Login from "./components/login";
import Registeration from "./components/register";
import PageNotFound from "./components/pagenotfound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./components/logout";
class App extends Component {
  state = {
    isLoggedIn: false
  };
  setLogin = status => {
    this.setState({ isLoggedIn: status });
  };
  render() {
    return (
      <div>
        <NavBar isLoggedIn={this.state.isLoggedIn} setLogin={this.setLogin} />
        <Switch>
          <Route
            path="/login"
            render={props => (
              <Login
                isLoggedIn={this.state.isLoggedIn}
                setLogin={this.setLogin}
                {...props}
              />
            )}
          />
          {this.state.isLoggedIn ? (
            <Route path="/todos" component={Todos} />
          ) : (
            <Redirect to="/login" />
          )}
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Registeration} />
        </Switch>
      </div>
    );
  }
}

export default App;

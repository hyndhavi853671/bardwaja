import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Category from "./components/category";
import Movies from "./components/movies";
import Movie from "./components/movie";
//import BrowserRouter from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Employee from "./components/employee";
import PageNotFound from "./components/pagenotfound";
import MovieDetails from "./components/moviedetails";
import Registration from "./components/registration";
import Posts from "./components/postss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import * as Sentry from "@sentry/browser";
import Logout from "./components/logout";

{
  /*Sentry.init({
  dsn: "https://7a89d140124840b4a9886c152b2a5cac@sentry.io/4463028"
});*/
}
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
        <ToastContainer />
        <NavBar isLoggedIn={this.state.isLoggedIn} setLogin={this.setLogin} />
        <Switch>
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:_id?" component={MovieDetails} />
          <Route path="/home" component={Home} />
          <Route path="/employee" component={Employee} />
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
          <Route path="/logout" component={Logout} />
          <Route path="/registration" component={Registration} />
          <Route path="/postss" component={Posts} />
          <Route path="/" />
          <Route path="/pagenotfound" component={PageNotFound} />
          <Redirect from="/home" to="/" />

          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}
export default App;

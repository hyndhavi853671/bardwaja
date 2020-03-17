import React from "react";
import "./App.css";
import NavBar from "./components/navbar";
//import Category from "./components/category";
import Books from "./components/books";
import { Route, Switch } from "react-router-dom";
import BookDetails from "./components/bookdetails";
import "../node_modules/dist";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/books" exact component={Books} />
        <Route path="/books/:_id?" component={BookDetails} />
      </Switch>
    </div>
  );
}

export default App;

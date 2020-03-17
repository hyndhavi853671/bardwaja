import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
//import Counters from "./components/counters";
//import logo from './logo.svg';
//import './App.css';
class App extends Component {
  state = {
    totalitems: 0,
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    const { totalitems, counters } = this.state; //destructring
    return (
      <div>
        <NavBar totalitems={this.state.totalitems} />
        <Counters
          counters={counters}
          handleIncrement={this.incr}
          handleDecrement={this.decr}
          handleDelete={this.del}
          handleReset={this.set}
        />
      </div>
    );
  }
  //<NavBar totalitems={this.state.totalitems} />
  //<Counters/>
  incr = id => {
    console.log("inside incr() method", id);
    const counter1 = this.state.counters;
    counter1.map(counter => {
      if (counter.id == id) {
        counter.value += 1;
        this.state.totalitems += 1;
      }
    });
    this.setState({ counters: counter1 });
    // this.setState({ count: this.state.count + 1 });
  };
  decr = id => {
    console.log("inside decr() method", id);
    const counter1 = this.state.counters;
    counter1.map(counter => {
      if (counter.id == id && counter.value > 0) {
        counter.value -= 1;
      }
      this.state.totalitems -= 1;
    });
    //if (this.state.count > 0) {
    // this.setState({ count: this.state.count - 1 });
    // }
  };
  del = id => {
    const counter1 = this.state.counters.filter(counter => counter.id !== id);
    this.setState({ counters: counter1 });
  };
  set = value => {
    const counter1 = this.state.counters;
    counter1.map(
      counter => (counter.value = 0)
      //this.state.totalitems = 0;
    );
    this.setState({ counters: counter1 });
  };
}
export default App;

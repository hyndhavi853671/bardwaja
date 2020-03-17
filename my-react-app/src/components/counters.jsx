//parent
import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    //const { id, value } = this.state;
    return (
      <div>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.handleReset(this.props.id)}
        >
          reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={Counter.id}
            handleIncrement={this.props.handleIncrement}
            handleDecrement={this.props.handleDecrement}
            handleDelete={this.props.handleDelete}
            hadleReset={this.props.handleReset}
            id={counter.id}
            value={counter.value}
            // className={counter.className}

            // <Counter id={1} c={this.state.count} />
            //<Counter id={1} c={this.state.count} />
            // <Counter id={1} c={this.state.count} />
            /*{this.state.counters.map(counter => (
            <Counter counter={this.state.counters}/>
            ))}*/
          />
        ))}
      </div>
    );
  }
}
export default Counters;

import React, { Component } from "react";

type CounterState = {
  count: number;
};

export default class CounterWithClass extends Component<
  Record<string, never>,
  CounterState
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="m-32">
        <h1>Current Count : {this.state.count}</h1>
        <button className="bg-amber-400" onClick={this.incrementCount}>
          Increment
        </button>
      </div>
    );
  }
}

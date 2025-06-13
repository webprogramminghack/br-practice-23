import React from "react";

type State = {
  count: number;
};

type Props = Record<string, never>;

class TimerCounter extends React.Component<Props, State> {
  intervalId: number | undefined;
  constructor(props: Props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Component Mounted");
    this.intervalId = window.setInterval(() => {
      this.setState((prev) => ({ count: prev.count + 1 }));
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component updated. count : ", this.state.count);
  }

  componentWillUnmount() {
    console.log("Component will unmount");
    clearInterval(this.intervalId);
  }

  render() {
    return <h1>Timer : {this.state.count}</h1>;
  }
}

export default TimerCounter;

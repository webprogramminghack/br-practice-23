import React from "react";

type GreetingWithClassProps = {
  name?: string;
};

export class GreetingWithClass extends React.Component<GreetingWithClassProps> {
  static defaultProps = {
    name: "John",
  };
  render() {
    return (
      <>
        <h1>Ini Class Component With {this.props.name}</h1>
      </>
    );
  }
}

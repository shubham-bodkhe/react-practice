import React, { Component } from "react";

class CounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prev) => {
      return { count: prev + 1 };
    });
  };
  render() {
    return <div>{this.props.render(this.state, this.increment)}</div>;
  }
}

export default CounterTwo;

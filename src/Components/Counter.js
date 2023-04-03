import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  hoverHandler = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <button onMouseOver={this.hoverHandler}>Hovered {count} Click</button>
      </>
    );
  }
}

export default Counter;

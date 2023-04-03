import React, { Component } from "react";

export class Clicker extends Component {
  render() {
    const { count, incremet } = this.props;
    return (
      <>
        <button onClick={incremet}>Click {count} Times</button>
      </>
    );
  }
}

export default Clicker;

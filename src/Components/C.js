import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

export class C extends Component {
  render() {
    return (
      <>
        <UserConsumer>
          {(userName) => {
            return <div>hello {userName}</div>;
          }}
        </UserConsumer>
      </>
    );
  }
}

export default C;

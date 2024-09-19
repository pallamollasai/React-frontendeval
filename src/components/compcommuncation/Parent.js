import React from "react";
import Child from "./Child";
export class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 10
    };
  }

  incrementCountBy = (number) => {
    this.setState((prevState) => {
      return {
        count: prevState.count + number
      };
    });
  };

  render() {
    return (
      <>
        <p>count is {this.state.count} </p>
        <Child count="10" incrementCountBy={this.incrementCountBy} />
      </>
    );
  }
}

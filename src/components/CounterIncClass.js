import React from "react";
export default class CounterIncClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  };

  decrementCounter = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  };

  render() {
    return (
      <>
        <button onClick={this.incrementCounter}>Increment </button>
        <span>{this.state.count}</span>
        <button onClick={this.decrementCounter} disabled={this.state.count < 1}>
          Decrement
        </button>
      </>
    );
  }
}

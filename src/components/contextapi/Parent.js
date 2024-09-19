import React from "react";
import { UserContextConsumer } from "./GrandParent";
import Child from "./Child";

export default class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {}
    };
  }
  // componentDidMount() {
  //   this.context.subscribe((data) => {
  //     this.setState({
  //       userDetails: data
  //     });
  //   });
  // }

  render() {
    return (
      <>
        {/* <p>{this.state.userDetails.userName}</p> */}
        <UserContextConsumer>
          {(value) => <p>{value.userName}</p>}
        </UserContextConsumer>
        <Child />
      </>
    );
  }
}

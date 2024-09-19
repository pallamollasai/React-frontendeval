import React from "react";
export default class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      isError: false
    };
  }
  static getDerivedStateFromError(error) {
    console.log("error occrred");
    // this.setState({isError : true});
    return {
      isError: true
    };
  }

  // componentDidCatch(error, info) {
  //   console.log("hellooo");
  //   this.setState({ isError: true });
  // }

  // <ErrorBoundary>
  //       <SampleComponent name="JOKER" />
  //     </ErrorBoundary>

  render() {
    return (
      <>
        {this.state.isError ? <p>Error Occured 1111</p> : this.props.children}
      </>
    );
  }
}

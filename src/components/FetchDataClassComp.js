import React from "react";
import { useCounter } from "./CustomHook";

const API_URL = "https://dummyjson.com/products";
export default class FetchDataClassCompo extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        // this.data = res.products;
        console.log("data is ", data.products);
        this.setState({
          data: data.products
        });
      });
  }
  render() {
    return (
      <>
        <h1>Data is </h1>
        <ul>
          {this.state.data.map((product, index) => (
            <li key={product.id}> {product.title}</li>
          ))}
        </ul>
      </>
    );
  }
}

import React, { useState, useEffect } from "react";
import "./style.css";

const URL = "https://dummyjson.com/products?limit=10&skip=30";
export default function Pagination() {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${currentPage * 10 - 10}`
      );
      const data = await res.json();
      console.log("data is ", data);
      setTotalPages(data.total / 10);
      setProducts(data.products);
    }
    getData();
  }, [currentPage]);

  const handleCurrentPage = (index, type = "") => {
    if (index >= 1 && index <= 10) {
      if (type === "DEC") setCurrentPage(index - 1);
      else if (type === "INC") setCurrentPage(index + 1);
      else setCurrentPage(index + 1);
    }
  };

  return (
    <>
      <div class="products-container">
        {products.map((product) => (
          <div key={product.id} class="product">
            <img src={product.thumbnail} alt={product.title} />
            <span>{product.title}</span>
          </div>
        ))}
      </div>
      <div className="pagination-controls">
        <span
          className={currentPage === 1 ? "hide" : ""}
          onClick={() => handleCurrentPage(currentPage, "DEC")}
        >
          Prev
        </span>
        {[...Array(totalPages)].map((_, index) => (
          <>
            <span
              key={index}
              onClick={() => handleCurrentPage(index)}
              style={{
                backgroundColor: currentPage - 1 === index ? "lightblue" : ""
              }}
            >
              {index + 1}
            </span>
          </>
        ))}
        <span
          className={currentPage === products.length ? "hide" : ""}
          onClick={() => handleCurrentPage(currentPage, "INC")}
        >
          Next
        </span>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";

export default function InfiniteScroll() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  window.onscroll = (e) => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      getData();
    }
  };

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => {
        setData((data) => {
          return [...data, ...res];
        });
      });
  };

  return (
    <>
      <div className="container">
        <ul>
          {data.map((element, index) => (
            <li key={element.id + "" + index} style={{ listStyleType: "none" }}>
              {element.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

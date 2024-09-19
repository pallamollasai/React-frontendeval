import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        // console.log("data is ", data);
        setData(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;

// import { useEffect, useState } from "react";

// export const useFetchHook = (url) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [apiData, setApiData] = useState(null);
//   const [serverError, setServerError] = useState(null);

//   useEffect(() => {
//     setIsLoading(true);
//     const fetchData = async () => {
//       try {
//         const resp = await fetch(url);
//         const data = await resp.json();

//         setApiData(data);
//         setIsLoading(false);
//       } catch (error) {
//         setServerError(error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [url]);

//   return { isLoading, apiData, serverError };
// };

/// USING CUSTOM FETCH HERE
// const { isLoading, serverError, apiData } = useFetchHook(
//   "https://jsonplaceholder.typicode.com/posts/1"
// );

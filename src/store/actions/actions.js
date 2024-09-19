export const setData = (action) => {};

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: "loading", value: true });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "SET_DATA", value: data });
      })
      .catch((err) => console.log("error occurred"));
  };
};

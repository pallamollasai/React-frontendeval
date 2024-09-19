import React from "react";
import { connect } from "react-redux";
import { fetchData, setData } from "../../store/actions/actions";

function Child(props) {
  return (
    <>
      <p>coount is {props.count}</p>
      <button onClick={props.setData}>Get Data</button>
      {props.data ? (
        <>
          <ul>
            {props.data.map((user) => (
              <>
                <li key={user.id}>{user.title}</li>
              </>
            ))}
          </ul>
        </>
      ) : (
        ``
      )}
    </>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    count: state.cake.count,
    data: state.cake.data
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    incrementCount: () => dispatch({ type: "INC" }),
    setData: () => dispatch(fetchData())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Child);

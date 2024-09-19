import React from "react";
import { connect } from "react-redux";
function SagaExample(props) {
  return (
    <>
      <p>
        noOfMobiles {props.noOfMobiles} -{" "}
        {props.users ? `${props.users.length}` : ""}-{" "}
        {props.user ? props.user.name : ""}
      </p>
      <button onClick={() => props.buyMobile()}>Buy Mobile</button>
      <button onClick={() => props.sellMobile()}>Sell Mobile</button>
      <button onClick={() => props.getUsers()}>Get Users</button>
      <button onClick={() => props.getSingleUser(3)}>Get Single User</button>
    </>
  );
}

const mapStateProps = (state, ownProps) => {
  return {
    noOfMobiles: state.user.noOfMobiles,
    users: state.user.users,
    user: state.user.singleUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyMobile: () => dispatch({ type: "BUY_MOBILE" }),
    sellMobile: () => dispatch({ type: "SELL_MOBILE" }),
    getUsers: () => dispatch({ type: "GET_USERS" }),
    getSingleUser: (id) => dispatch({ type: "GET_SINGLE_USER", id: id })
  };
};

export default connect(mapStateProps, mapDispatchToProps)(SagaExample);

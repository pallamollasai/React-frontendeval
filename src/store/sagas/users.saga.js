import axios from "axios";
import {
  takeEvery,
  takeLatest,
  all,
  put,
  delay,
  call
} from "redux-saga/effects";

function* buyMobile() {
  yield delay(4000);
  // put dispatches the action
  yield put({ type: "BUY_MOBILE_SUCCESS" });
}

function* sellMobile() {
  console.log("incoming..");
  yield delay(4000);
  yield put({ type: "SELL_MOBILE_SUCCESS" });
}

function* getUsers() {
  try {
    let response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put({ type: "GET_USERS_SUCCESS", data: response.data });
  } catch (error) {
    yield put({ type: "GET_USERS_FAILURES", message: error.message });
  }
}

function* getSingleUser({ id }) {
  try {
    let response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    console.log("single user is ", response.data);
    yield put({ type: "GET_SINGLE_USER_SUCCESS", data: response.data });
  } catch (err) {}
}

export function* watchUser() {
  yield all([
    takeLatest("BUY_MOBILE", buyMobile),
    takeEvery("SELL_MOBILE", sellMobile),
    takeLatest("GET_USERS", getUsers),
    takeLatest("GET_SINGLE_USER", getSingleUser)
  ]);
}




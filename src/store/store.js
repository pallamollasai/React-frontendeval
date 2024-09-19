import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import cakeReducer from "./reducers/cakeReducer";

import createSagaMiddleware from "redux-saga";
import { watchUser } from "./sagas/users.saga";
import { userMobileReducer } from "./reducers/userMobileReducer";
const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
  cake: cakeReducer,
  user: userMobileReducer
});

const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchUser);
export default store;

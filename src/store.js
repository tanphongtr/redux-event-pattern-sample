import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import {
  reducer as userReducer,
  saga as userSaga
} from "./components/UserList";
import {
  reducer as createUserReducer,
  saga as createUserSaga
} from "./components/UserCreate";
import sendMailSaga from "./sendMailSaga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    user: userReducer,
    createUser: createUserReducer
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
  yield all([userSaga, createUserSaga, sendMailSaga].map(saga => fork(saga)));
}

sagaMiddleware.run(rootSaga);

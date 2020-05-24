import { call, put, takeLatest } from "redux-saga/effects";
import { createUser } from "../../services/user";

function* create({ user }) {
  try {
    yield put({ type: "user/create_start" });
    const addedUser = yield call(createUser, user);
    yield put({ type: "user/create_success", user: addedUser });
  } finally {
    yield put({ type: "user/create_end" });
  }
}

export default function* userSaga() {
  yield takeLatest("user/create", create);
}

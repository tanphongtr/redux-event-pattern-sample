import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchUsers } from "../../services/user";

function* fetch() {
  try {
    yield put({ type: "user/fetch_start" });
    const users = yield call(fetchUsers);
    yield put({ type: "user/fetch_end", users });
  } catch {
    yield put({ type: "user/fetch_end", users: [] });
  }
}

export default function* userSaga() {
  yield takeLatest("user/fetch", fetch);
  yield takeEvery("user/create_success", fetch); // Trigger fetch user when the event user/create_success occurs.
}

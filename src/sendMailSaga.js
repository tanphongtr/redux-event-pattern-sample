import { takeEvery, takeLatest, call } from "redux-saga/effects";
import { sendEmail } from "./services/user";

function* send({ user }) {
  yield call(sendEmail, user);
}

export default function* userSaga() {
  yield takeLatest("user/fetch", fetch);
  yield takeEvery("user/create_success", send); // Trigger fetch user when the event user/create_success occurs.
}

import { all, call } from "redux-saga/effects";
import { rootWatcher } from "./watchers";

export function* rootSaga() {
  yield all([rootWatcher()]);
}

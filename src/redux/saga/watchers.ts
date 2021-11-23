import { all, takeEvery } from "redux-saga/effects";
import { getTasksFromJson } from "../todo/actions/actions";
import { getTasksFromJSON_worker } from "./workers";

function* getTodos() {
  yield takeEvery(getTasksFromJson, getTasksFromJSON_worker);
}

export function* rootWatcher() {
  yield all([getTodos()]);
}

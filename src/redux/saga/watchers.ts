import { all, takeEvery } from "redux-saga/effects";
import { getTasksFromJSON_worker } from "./workers";
import { actionsTypes } from "../todo/types/types";

function* getTodos() {
  yield takeEvery(actionsTypes.GET_TASKS_FROM_JSON, getTasksFromJSON_worker);
}

export function* rootWatcher() {
  yield all([getTodos()]);
}

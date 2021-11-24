import { all, takeEvery } from "redux-saga/effects";
import { workerGetTasksFromJSON, workerPutTasksToJSON } from "./workers";
import { actionsTypes } from "../todo/types/types";

function* getTodos() {
  yield takeEvery(actionsTypes.GET_TASKS_FROM_JSON, workerGetTasksFromJSON);
}

function* putTask() {
  yield takeEvery(actionsTypes.PUT_TASK_TO_JSON, workerPutTasksToJSON);
}

export function* rootWatcher() {
  yield all([getTodos(), putTask()]);
}

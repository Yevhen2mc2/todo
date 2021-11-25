import { all, takeEvery } from "redux-saga/effects";
import {
  workerGetAllTasksFromJSON,
  workerPutTasksToJSON,
  workerDeleteTaskInJSON,
  workerUpdateTaskInJSON,
} from "./workers";
import { actionsTypes } from "../todo/types/types";

function* getTodos() {
  yield takeEvery(actionsTypes.GET_TASKS_FROM_JSON, workerGetAllTasksFromJSON);
}

function* putTask() {
  yield takeEvery(actionsTypes.PUT_TASK_TO_JSON, workerPutTasksToJSON);
}

function* updateTask() {
  yield takeEvery(actionsTypes.UPDATE_TASK_IN_JSON, workerUpdateTaskInJSON);
}

function* deleteTask() {
  yield takeEvery(actionsTypes.DELETE_TASK_IN_JSON, workerDeleteTaskInJSON);
}

export function* rootWatcher() {
  yield all([getTodos(), putTask(), updateTask(), deleteTask()]);
}

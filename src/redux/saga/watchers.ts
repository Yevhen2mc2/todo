import { all, takeEvery } from "redux-saga/effects";
import {
  workerGetAllTasksFromJSON,
  workerPutTasksToJSON,
  workerDeleteTaskInJSON,
  workerUpdateTaskInJSON,
} from "./workers";
import { sagaActionsTypes } from "../todo/types/types";

function* getTodos() {
  yield takeEvery(
    sagaActionsTypes.GET_TASKS_FROM_JSON,
    workerGetAllTasksFromJSON
  );
}

function* putTask() {
  yield takeEvery(sagaActionsTypes.PUT_TASK_TO_JSON, workerPutTasksToJSON);
}

function* updateTask() {
  yield takeEvery(sagaActionsTypes.UPDATE_TASK_IN_JSON, workerUpdateTaskInJSON);
}

function* deleteTask() {
  yield takeEvery(sagaActionsTypes.DELETE_TASK_IN_JSON, workerDeleteTaskInJSON);
}

export function* rootWatcher() {
  yield all([getTodos(), putTask(), updateTask(), deleteTask()]);
}

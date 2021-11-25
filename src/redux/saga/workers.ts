import { call, put } from "redux-saga/effects";
import { getTasksFromJson, putTasksToStore } from "../todo/actions/actions";
import { TaskItem } from "../todo/types/types";
import { todoAPI } from "./API/todoAPI";

export function* workerGetAllTasksFromJSON() {
  try {
    const data = yield call(() => todoAPI.getAll());
    const todos = yield data.json();
    const todosCorrectDate: TaskItem[] = todos.map((item, index) => {
      return { ...item, deadline: new Date(todos[index].deadline) };
    });
    yield put(putTasksToStore(todosCorrectDate));
  } catch {
    throw new Error("Error get tasks from json-server");
  }
}

export function* workerPutTasksToJSON(action) {
  try {
    yield call(() => todoAPI.post(action.payload));
  } catch {
    throw new Error("Error put task to json-server");
  }
}

export function* workerUpdateTaskInJSON(action) {
  try {
    yield call(() => todoAPI.update(action.payload));
  } catch {
    throw new Error("Error update task in json-server");
  }
}

export function* workerDeleteTaskInJSON(action) {
  try {
    yield call(() => todoAPI.delete(action.payload));
    yield put(getTasksFromJson());
  } catch {
    throw new Error("Error update task in json-server");
  }
}

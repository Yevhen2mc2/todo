import { call, put } from "redux-saga/effects";
import { putTasksToStore } from "../../todo/actions/actions";
import { TaskItem } from "../../todo/types/types";
import { todoAPI } from "./API/todoAPI";
import { getTasksFromJson } from "./types/types";
import { setError, setLoading } from "../../system/actions/actions";

export function* workerGetAllTasksFromJSON() {
  try {
    yield put(setLoading(true));
    const data = yield call(() => todoAPI.getAll());
    const todos = yield data.json();
    const todosCorrectDate: TaskItem[] = todos.map((item) => {
      return { ...item, deadline: new Date(item.deadline) };
    });
    yield put(putTasksToStore(todosCorrectDate));
    yield put(setLoading(false));
  } catch {
    yield put(setLoading(false));
    yield put(setError(true));
    throw new Error("Error get tasks from json-server");
  }
}

export function* workerPutTasksToJSON(action) {
  try {
    yield call(() => todoAPI.post(action.payload));
  } catch {
    yield put(setError(true));
    throw new Error("Error put task to json-server");
  }
}

export function* workerUpdateTaskInJSON(action) {
  try {
    yield call(() => todoAPI.update(action.payload));
  } catch {
    yield put(setError(true));
    throw new Error("Error update task in json-server");
  }
}

export function* workerDeleteTaskInJSON(action) {
  try {
    yield call(() => todoAPI.delete(action.payload));
    yield put(getTasksFromJson());
  } catch {
    yield put(setError(true));
    throw new Error("Error update task in json-server");
  }
}

import { call, put } from "redux-saga/effects";
import { putTasksToStore } from "../todo/actions/actions";

const getTodos = () => fetch("http://localhost:8000/todos");
// class API (todo)

export function* getTasksFromJSON_worker() {
  try {
    const data = yield call(getTodos);
    const json = yield data.json();
    yield put(putTasksToStore(json));
  } catch {
    throw new Error("Error get tasks from json-server");
  }
}

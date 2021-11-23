import { call, put } from "redux-saga/effects";
import { putTasksToStore } from "../todo/actions/actions";

const getTodos = () => fetch("http://localhost:8000/todos");

export function* getTasksFromJSON_worker(actions) {
  console.log("WORKER ACTION:", actions);
  try {
    const data = yield call(getTodos);
    const json = yield data.json();
    console.log("data from json:", json);
    yield put(putTasksToStore());
  } catch {
    throw new Error("Error get tasks from json-server");
  }
}

// function* postTasksToJSON(actions) {
//   try {
//     yield post({ type: "USER_FETCH_SUCCEEDED", user: user });
//   } catch {
//     throw new Error("Error post task to json-server");
//   }
// }

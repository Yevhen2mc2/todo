import { call, put } from "redux-saga/effects";
import { putTasksToStore } from "../todo/actions/actions";
import { TaskItem } from "../todo/types/types";

class TodoAPI {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  putOne(todo: TaskItem) {
    return fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
  }

  getAll() {
    return fetch("http://localhost:8000/todos");
  }
}

const todoAPI = new TodoAPI("http://localhost:8000/todos");

export function* workerGetTasksFromJSON() {
  try {
    const data = yield call(todoAPI.getAll);
    const [json] = yield data.json();
    json.deadline = new Date(json.deadline);
    yield put(putTasksToStore(json));
  } catch {
    throw new Error("Error get tasks from json-server");
  }
}

export function* workerPutTasksToJSON(action) {
  try {
    console.log("action in workerPutTasksToJSON", action);
    const send = yield todoAPI.putOne(action.payload);
    console.log("response", send);
  } catch {
    throw new Error("Error put task to json-server");
  }
}

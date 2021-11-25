import { TaskItem } from "../../../todo/types/types";

class TodoAPI {
  url: string;
  constructor(url: string) {
    this.url = url;
  }

  post(todo: TaskItem) {
    return fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
  }

  update(task: TaskItem) {
    return fetch(this.url + `/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
  }

  delete(id: number) {
    return fetch(this.url + `/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  getAll() {
    return fetch(this.url);
  }
}

export const todoAPI = new TodoAPI("http://localhost:8000/todos");

import { TaskItem, TodoPreview } from "../../../todo/types/types";

export enum sagaActionsTypes {
  GET_TASKS_FROM_JSON = "GET_TASKS_FROM_JSON",
  PUT_TASK_TO_JSON = "PUT_TASK_TO_JSON",
  UPDATE_TASK_IN_JSON = "UPDATE_TASK_IN_JSON",
  DELETE_TASK_IN_JSON = "DELETE_TASK_IN_JSON",
}

export const getTasksFromJson = () => {
  return {
    type: sagaActionsTypes.GET_TASKS_FROM_JSON,
  };
};

export const putTaskToJSON = (task: TodoPreview) => {
  return {
    type: sagaActionsTypes.PUT_TASK_TO_JSON,
    payload: task,
  };
};

export const updateTaskInJSON = (task: Partial<TaskItem>) => {
  return {
    type: sagaActionsTypes.UPDATE_TASK_IN_JSON,
    payload: task,
  };
};

export const deleteTaskInJSON = (id: number | undefined) => {
  return {
    type: sagaActionsTypes.DELETE_TASK_IN_JSON,
    payload: id,
  };
};

import { actionsTypes, TaskItem } from "../types/types";

export const addNewTask = (task: TaskItem) => {
  return {
    type: actionsTypes.ADD_NEW_TASK,
    payload: task,
  };
};

export const updateTask = (task: Partial<TaskItem>) => {
  return {
    type: actionsTypes.UPDATE_TASK,
    payload: task,
  };
};

export const getTasksFromJson = () => {
  return {
    type: actionsTypes.GET_TASKS_FROM_JSON,
  };
};

export const putTasksToStore = (list: TaskItem[]) => {
  return {
    type: actionsTypes.PUT_TASKS_TO_STORE,
    payload: list,
  };
};

export const putTaskToJSON = (task: TaskItem) => {
  return {
    type: actionsTypes.PUT_TASK_TO_JSON,
    payload: task,
  };
};

export const updateTaskInJSON = (task: Partial<TaskItem>) => {
  return {
    type: actionsTypes.UPDATE_TASK_IN_JSON,
    payload: task,
  };
};

export const deleteTaskInJSON = (id: number | undefined) => {
  return {
    type: actionsTypes.DELETE_TASK_IN_JSON,
    payload: id,
  };
};

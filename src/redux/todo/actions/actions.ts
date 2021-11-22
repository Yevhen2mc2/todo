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

export const removeTask = (task: TaskItem) => {
  return {
    type: actionsTypes.REMOVE_TASK,
    payload: task,
  };
};

import { actionsTypes, TaskItem } from "../types/types";

export const putTasksToStore = (list: TaskItem[]) => {
  return {
    type: actionsTypes.PUT_TASKS_TO_STORE,
    payload: list,
  };
};

import { actionsTypes, TaskItem } from "../types/types";
import { User } from "../../../localStorage/localStorage";

export const putTasksToStore = (list: TaskItem[]) => {
  return {
    type: actionsTypes.PUT_TASKS_TO_STORE,
    payload: list,
  };
};

export const setUser = (user: User) => {
  return {
    type: actionsTypes.SET_USER,
    payload: user,
  };
};

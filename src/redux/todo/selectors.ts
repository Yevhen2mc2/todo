import { createSelector } from "reselect";
import { RootState } from "../index";

export const getTodoList = (state: RootState) => state.todoReducer.list;

export const selectorTaskToEdit = (id: string) =>
  createSelector(getTodoList, (list) =>
    list.find((task) => task.id === Number(id))
  );

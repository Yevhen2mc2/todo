import { createSelector } from "reselect";
import { RootState } from "../../rootReducer";

export const getTodoList = (state: RootState) => state.todo.list;

export const selectorTaskToEdit = (id: string) =>
  createSelector(getTodoList, (list) =>
    list.find((task) => task.id === Number(id))
  );

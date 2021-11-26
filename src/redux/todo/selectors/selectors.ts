import { createSelector } from "reselect";
import { RootState } from "../../rootReducer";

export const selectorTaskToEdit = (id: string) =>
  createSelector(
    (state: RootState) => state.todo.list,
    (list) => list.find((task) => task.id === Number(id))
  );

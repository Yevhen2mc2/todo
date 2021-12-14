import { AppDispatch } from "../index";
import { systemSlice } from "../system/systemSlice";
import { todoAPI } from "../../shared/API/todoAPI";
import { ITaskItem, todoSlice } from "./todoSlice";

export const todoThunk = {
  getTasksFromJson: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(systemSlice.actions.setLoading(true));
      const data = await todoAPI.getAll();
      const todos = await data.json();
      dispatch(todoSlice.actions.putTaskToStore(todos));
      dispatch(systemSlice.actions.setLoading(false));
    } catch (e) {
      dispatch(systemSlice.actions.setLoading(false));
      dispatch(systemSlice.actions.setError("Error in getTasksFromJson"));
      throw new Error("Error get tasks from json-server");
    }
  },

  putTaskToJSON: () => async (dispatch: AppDispatch) => {
    try {
    } catch (e) {}
  },
};

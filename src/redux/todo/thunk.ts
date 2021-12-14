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

  putTaskToJSON:
    (todo: Partial<ITaskItem>) => async (dispatch: AppDispatch) => {
      try {
        await todoAPI.post(todo);
      } catch (e) {
        dispatch(systemSlice.actions.setError("Error in putTaskToJSON"));
        throw new Error("Error put task to json-server");
      }
    },
};

// export function* workerPutTasksToJSON(action) {
//   try {
//     yield call(() => todoAPI.post(action.payload));
//   } catch {
//     yield put(setError(true));
//     throw new Error("Error put task to json-server");
//   }
// }

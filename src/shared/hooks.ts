import { useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { getTodoList } from "../redux/todo/selectors";
import { AppDispatch, RootState } from "../redux";
import { systemSlice } from "../redux/system/systemSlice";
import { todoAPI } from "./API/todoAPI";
import { todoSlice } from "../redux/todo/todoSlice";

export const useGetList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTasksFromJson());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return useAppSelector(getTodoList);
};

const getTasksFromJson = () => async (dispatch: AppDispatch) => {
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
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

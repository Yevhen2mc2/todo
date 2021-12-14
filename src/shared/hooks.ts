import { useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { getTodoList } from "../redux/todo/selectors";
import { AppDispatch, RootState } from "../redux";
import { Thunk } from "../redux/rootThunk";

export const useGetList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(Thunk.todo.getTasksFromJson());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return useAppSelector(getTodoList);
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

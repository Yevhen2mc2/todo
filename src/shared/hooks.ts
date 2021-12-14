import { useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { getTodoList } from "../redux/todo/selectors";
import { AppDispatch, RootState } from "../redux";

export const useGetList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTasksFromJson());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return useSelector(getTodoList);
};

const getTasksFromJson = () => () => {};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

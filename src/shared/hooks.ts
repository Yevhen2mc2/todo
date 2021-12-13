import { useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { getTodoList } from "../redux/todo/selectors/selectors";
import { AppDispatch, RootState } from "../redux";

export const useGetList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(getTasksFromJson()); // TODO: rewrite
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return useSelector(getTodoList);
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

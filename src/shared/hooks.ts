import { useEffect } from "react";
import { getTasksFromJson } from "../redux/saga/todo/types/types";
import { useDispatch, useSelector } from "react-redux";
import { getTodoList } from "../redux/todo/selectors/selectors";

export const useGetList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasksFromJson());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return useSelector(getTodoList);
};

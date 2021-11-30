import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import style from "./ListStyle.module.scss";
import { TaskItem } from "../../redux/todo/types/types";
import { Button } from "@mui/material";
import { differenceInDays } from "date-fns";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  deleteTaskInJSON,
  getTasksFromJson,
} from "../../redux/saga/todo/types/types";

const List: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTasksFromJson());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const deleteItem = (id: number | undefined) => {
    dispatch(deleteTaskInJSON(id));
  };

  const calculateDifference = (task, deadline: Date | null): string => {
    const deadlineDays: number | undefined = deadline
      ? differenceInDays(deadline, new Date())
      : undefined;
    if (deadlineDays) {
      return `Time left: ` + deadlineDays + " days";
    }
    return "Error calc date";
  };

  const renderTaskList = (list: TaskItem[]) => {
    if (list.length) {
      return list.map((item, index) => (
        <div key={item.id}>
          <div className={style.taskOne}>
            <div className={style.taskData}>
              <div className={clsx(style.chip, style[item.priority])}>
                {item.priority}
              </div>
              <div className={style.taskTitle}>{`${index + 1}. ${
                item.title
              }`}</div>
              <div className={style.taskDescription}>{item.description}</div>
            </div>
            <div className={style.data}>
              {" "}
              <div className={style.deadline}>
                {`Deadline: ${item.deadline?.toLocaleDateString()}`}
              </div>
              <div className={style.timeLeft}>
                {calculateDifference(item, item.deadline)}
              </div>
            </div>
          </div>
          <Button onClick={() => navigate(`/edit/${item.id}`)}>edit</Button>
          <Button onClick={() => deleteItem(item.id)} className={style.delete}>
            delete
          </Button>
        </div>
      ));
    }

    return <div>Empty list</div>;
  };

  const list = useSelector((state: RootState) => state.todo.list);
  return (
    <div>
      <div className={style.containerList}>{renderTaskList(list)}</div>
    </div>
  );
};

export default List;

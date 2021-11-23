import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { getTasksFromJson, removeTask } from "../../redux/todo/actions/actions";
import style from "./ListStyle.module.scss";
import { TaskItem } from "../../redux/todo/types/types";
import { Button } from "@mui/material";
import { differenceInDays } from "date-fns";
import clsx from "clsx";
import { Link } from "react-router-dom";

const List: React.FC = () => {
  const dispatch = useDispatch();
  dispatch(getTasksFromJson());
  console.log("dispatched getTasksFromJson");
  const deleteItem = (id: string) => {
    dispatch(removeTask(id));
  };

  const calculateDifference = (task, deadline: Date | null): string => {
    const deadlineDays: number | undefined = deadline
      ? differenceInDays(deadline, new Date())
      : undefined;
    if (deadlineDays) {
      return `Time left: ` + deadlineDays + " days";
    }
    return "Error calc Date";
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
          <Link to={`/edit/${item.id}`}>edit</Link>
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
      <Link to="/">main</Link>
    </div>
  );
};

export default List;

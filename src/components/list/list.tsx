import { useDispatch } from "react-redux";
import style from "./listStyle.module.scss";
import { TaskItem } from "../../redux/todo/types/types";
import { Button } from "@mui/material";
import { differenceInDays } from "date-fns";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { deleteTaskInJSON } from "../../redux/saga/todo/types/types";
import { useGetList } from "../../shared/hooks";
import { url } from "../../shared/utils";

const List: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const list = useGetList();
  const deleteItem = (id: number | undefined) => {
    dispatch(deleteTaskInJSON(id));
  };

  const calculateDifference = (deadline: Date | null): string => {
    const deadlineDays: number | undefined = deadline
      ? differenceInDays(deadline, new Date())
      : undefined;
    if (deadlineDays) return `Time left: ` + deadlineDays + " days";
    return "Error calc date";
  };

  const renderTaskList = (list: TaskItem[]) => {
    if (list.length) {
      return list.map((item, index) => (
        <div key={item.id} className={style.taskContainer}>
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
              <div className={style.deadline}>
                {`Deadline: ${item.deadline?.toLocaleDateString()}`}
              </div>
              <div className={style.timeLeft}>
                {calculateDifference(item.deadline)}
              </div>
            </div>
          </div>
          <Button onClick={() => navigate(url.edit.set(item.id))}>edit</Button>
          <Button onClick={() => deleteItem(item.id)} className={style.delete}>
            delete
          </Button>
        </div>
      ));
    }

    return <div>Empty list</div>;
  };

  return (
    <div>
      <div className={style.containerList}>{renderTaskList(list)}</div>
    </div>
  );
};

export default List;

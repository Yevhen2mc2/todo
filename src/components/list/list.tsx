import style from "./listStyle.module.scss";
import { Button } from "@mui/material";
import { differenceInDays } from "date-fns";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useGetList } from "../../shared/hooks";
import { url } from "../../shared/utils";
import { ITaskItem } from "../../redux/todo/todoSlice";
import { Thunk } from "../../redux/rootThunk";

const List: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const list = useGetList();
  const deleteItem = (id: number) => dispatch(Thunk.todo.deleteTaskInJSON(id));

  const calculateDifference = (deadline: string | null): string => {
    const deadlineObj = deadline ? new Date(deadline) : null;

    const deadlineDays: number | undefined = deadlineObj
      ? differenceInDays(deadlineObj, new Date())
      : undefined;
    if (deadlineDays) return `Time left: ` + deadlineDays + " days";
    return "Error calc date";
  };

  const renderTaskList = (list: ITaskItem[]) => {
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
                {`Deadline: ${item.deadline}`}
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

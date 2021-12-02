import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./editStyle.module.scss";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { MobileDatePicker } from "@mui/lab";
import { Priority, TaskItem } from "../../redux/todo/types/types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { updateTaskInJSON } from "../../redux/saga/todo/types/types";
import { selectorTaskToEdit } from "../../redux/todo/selectors/selectors";
import { url } from "../head/head";

const Edit: React.FC = () => {
  const dispatch = useDispatch();
  const focusOnInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const routeParams = useParams();

  const taskToEdit = useSelector(selectorTaskToEdit(routeParams.id || ""));

  useEffect(() => {
    if (!taskToEdit) {
      navigate(url.list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskToEdit]);

  const [deadline, setDeadline] = useState<Date | null>(taskToEdit!.deadline);
  const [priority, setPriority] = useState<Priority>(taskToEdit!.priority);
  const [todoData, setTodoData] = useState<Partial<TaskItem>>(taskToEdit!);

  const updateTaskInRedux = (): void => {
    const updatedTask = todoData;
    if (updatedTask!.deadline) updatedTask.deadline = deadline;
    if (updatedTask!.priority) updatedTask.priority = priority;
    if (updatedTask) dispatch(updateTaskInJSON(updatedTask));
    navigate(url.list);
  };

  const handleBackToList = () => {
    navigate(url.list);
  };

  function datePickers() {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label="Deadline"
          value={deadline}
          onChange={(newDeadline) => {
            setDeadline(newDeadline);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
  }

  const handleAddToListByEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && todoData!.title !== "") updateTaskInRedux();
  };

  const handleAddToListByButton = () => {
    if (todoData!.title !== "") updateTaskInRedux();
  };

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <h2 className={styles.title}>Edit</h2>
      <div className={styles.containerInput}>
        <div className={styles.inputTitle}>
          <TextField
            inputRef={focusOnInput}
            value={todoData!.title}
            onKeyPress={handleAddToListByEnter}
            onChange={handlerChange}
            label="Add task"
            variant="outlined"
            name="title"
          />
        </div>
        <div className={styles.inputDescription}>
          <TextField
            value={todoData!.description}
            onKeyPress={handleAddToListByEnter}
            onChange={handlerChange}
            label="Description"
            variant="outlined"
            name="description"
          />
        </div>

        <div className={styles.priority}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Priority</InputLabel>
            <Select
              value={priority}
              label="priority"
              onChange={(e) => setPriority(e.target.value as Priority)}
            >
              <MenuItem value={Priority.LOW}>{`${Priority.LOW}`}</MenuItem>
              <MenuItem
                value={Priority.MEDIUM}
              >{`${Priority.MEDIUM}`}</MenuItem>
              <MenuItem value={Priority.HIGH}>{`${Priority.HIGH}`}</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={styles.data}>{datePickers()}</div>
        <Button
          disabled={!todoData!.title}
          className={styles.save}
          onClick={handleAddToListByButton}
          variant="contained"
        >
          save
        </Button>
        <Button
          className={styles.save}
          onClick={handleBackToList}
          variant="contained"
        >
          cancel
        </Button>
      </div>
    </>
  );
};

export default Edit;

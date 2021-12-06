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
  const [todo, setTodo] = useState<TaskItem | null>(null);

  useEffect(() => {
    if (taskToEdit) {
      setTodo((state) => taskToEdit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateTaskInRedux = (): void => {
    if (todo) dispatch(updateTaskInJSON(todo));
    navigate(url.list);
  };

  const handleBackToList = () => navigate(url.list);

  function datePickers() {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          label="Deadline"
          value={todo?.deadline}
          onChange={(newDeadline) => {
            setTodo({ ...todo, deadline: newDeadline } as TaskItem);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
  }

  const handleAddToListByEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && todo?.title !== "") updateTaskInRedux();
  };

  const handleAddToListByButton = () => {
    if (todo?.title !== "") updateTaskInRedux();
  };

  const handlerChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, title: e.currentTarget.value } as TaskItem);
  };

  const handlerChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, description: e.currentTarget.value } as TaskItem);
  };

  if (!todo) return null;

  return (
    <>
      <h2 className={styles.title}>Edit</h2>
      <div className={styles.containerInput}>
        <div className={styles.inputTitle}>
          <TextField
            inputRef={focusOnInput}
            value={todo.title}
            onKeyPress={handleAddToListByEnter}
            onChange={handlerChangeTitle}
            label="Add task"
            variant="outlined"
            name="title"
          />
        </div>
        <div className={styles.inputDescription}>
          <TextField
            value={todo.description}
            onKeyPress={handleAddToListByEnter}
            onChange={handlerChangeDescription}
            label="Description"
            variant="outlined"
            name="description"
          />
        </div>

        <div className={styles.priority}>
          <FormControl fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select
              value={todo.priority}
              label="priority"
              onChange={(e) => {
                setTodo({ ...todo, priority: e.target.value } as TaskItem);
              }}
            >
              <MenuItem value={Priority.LOW}>{Priority.LOW}</MenuItem>
              <MenuItem value={Priority.MEDIUM}>{Priority.MEDIUM}</MenuItem>
              <MenuItem value={Priority.HIGH}>{Priority.HIGH}</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={styles.data}>{datePickers()}</div>
        <Button
          disabled={!todo.title}
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

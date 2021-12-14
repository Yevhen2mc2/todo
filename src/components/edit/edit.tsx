import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import TextField from "@mui/material/TextField";
import styles from "./editStyle.module.scss";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { MobileDatePicker } from "@mui/lab";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { selectorTaskToEdit } from "../../redux/todo/selectors";
import { MIN_WIDTH, url } from "../../shared/utils";
import { CommonButton } from "../../shared/buttons/buttons";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";
import { Priority, ITaskItem } from "../../redux/todo/todoSlice";
import { todoThunk } from "../../redux/todo/thunk";

const Edit: React.FC = () => {
  const dispatch = useAppDispatch();
  const focusOnInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const routeParams = useParams();

  const taskToEdit = useAppSelector(selectorTaskToEdit(routeParams.id || ""));
  const [todo, setTodo] = useState<ITaskItem | null>(null);

  useEffect(() => {
    if (taskToEdit) {
      setTodo((state) => taskToEdit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateTaskInRedux = (): void => {
    if (todo) dispatch(todoThunk.updateTaskInJSON(todo));
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
            setTodo({ ...todo, deadline: newDeadline } as ITaskItem);
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
    setTodo({ ...todo, title: e.currentTarget.value } as ITaskItem);
  };

  const handlerChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, description: e.currentTarget.value } as ITaskItem);
  };

  if (!todo) return null;

  return (
    <>
      <h2 className={styles.title}>Edit</h2>
      <div className={styles.containerInput}>
        <div className={styles.inputTitle}>
          <TextField
            sx={{ minWidth: MIN_WIDTH }}
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
            sx={{ minWidth: MIN_WIDTH }}
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
                setTodo({ ...todo, priority: e.target.value } as ITaskItem);
              }}
            >
              <MenuItem value={Priority.LOW}>{Priority.LOW}</MenuItem>
              <MenuItem value={Priority.MEDIUM}>{Priority.MEDIUM}</MenuItem>
              <MenuItem value={Priority.HIGH}>{Priority.HIGH}</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={styles.data}>{datePickers()}</div>
        <CommonButton
          disabled={!todo.title}
          onClick={handleAddToListByButton}
          variant="contained"
        >
          save
        </CommonButton>
        <CommonButton onClick={handleBackToList} variant="contained">
          cancel
        </CommonButton>
      </div>
    </>
  );
};

export default Edit;

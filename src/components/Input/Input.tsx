import React, {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useRef,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./InputStyle.module.scss";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { MobileDatePicker } from "@mui/lab";
import { addDays } from "date-fns";
import { Priority } from "../../redux/todo/types/types";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Link } from "react-router-dom";
import { putTaskToJSON } from "../../redux/saga/todo/types/types";

const Input: React.FC = () => {
  const [deadline, setDeadline] = useState<Date | null>(addDays(new Date(), 7));
  const [priority, setPriority] = useState<Priority>(Priority.MEDIUM);
  const dispatch = useDispatch();
  const focusOnInput = useRef<HTMLInputElement>(null);

  const addNewTaskInStore = (): void => {
    dispatch(
      putTaskToJSON({
        title: inputTitle,
        description: inputDescription,
        deadline: deadline,
        priority: priority,
      })
    );
    setInputTitle("");
    setDescription("");
    if (focusOnInput.current) focusOnInput.current.focus();
  };
  const [inputTitle, setInputTitle] = useState<string>("");
  const [inputDescription, setDescription] = useState<string>("");

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
    if (e.key === "Enter" && inputTitle !== "") addNewTaskInStore();
  };

  const handleAddToListByButton = (e: MouseEvent<HTMLButtonElement>) => {
    if (inputTitle !== "") addNewTaskInStore();
  };

  const handlerChangeTitle = (e: ChangeEvent<HTMLInputElement>) =>
    setInputTitle(e.currentTarget.value);

  const handlerChangeDescription = (e: ChangeEvent<HTMLInputElement>) =>
    setDescription(e.currentTarget.value);

  return (
    <div className={styles.containerInput}>
      <div className={styles.inputTitle}>
        <TextField
          inputRef={focusOnInput}
          value={inputTitle}
          onKeyPress={handleAddToListByEnter}
          onChange={handlerChangeTitle}
          label="Add your task.."
          variant="outlined"
        />
      </div>
      <div className={styles.inputDescription}>
        <TextField
          value={inputDescription}
          onKeyPress={handleAddToListByEnter}
          onChange={handlerChangeDescription}
          label="Description of task"
          variant="outlined"
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
            <MenuItem value={Priority.MEDIUM}>{`${Priority.MEDIUM}`}</MenuItem>
            <MenuItem value={Priority.HIGH}>{`${Priority.HIGH}`}</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={styles.data}>{datePickers()}</div>
      <Button
        disabled={!inputTitle}
        className={styles.add}
        onClick={handleAddToListByButton}
        variant="contained"
      >
        add
      </Button>
      <Link to="/list">List</Link>
    </div>
  );
};

export default Input;

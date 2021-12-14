import React, {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useRef,
  useState,
} from "react";
import TextField from "@mui/material/TextField";
import styles from "./inputStyle.module.scss";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { MobileDatePicker } from "@mui/lab";
import { addDays } from "date-fns";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { CommonButton } from "../../shared/buttons/buttons";
import { MIN_WIDTH, MIN_WIDTH_SELECT } from "../../shared/utils";
import { Priority } from "../../redux/todo/todoSlice";

const Input: React.FC = () => {
  const [deadline, setDeadline] = useState<Date | null>(addDays(new Date(), 7));
  const [priority, setPriority] = useState<Priority>(Priority.MEDIUM);
  const focusOnInput = useRef<HTMLInputElement>(null);

  const addNewTaskInStore = (): void => {
    // putTaskToJSON({
    //   title: inputTitle.trim(),
    //   description: inputDescription.trim(),
    //   deadline: deadline,
    //   priority: priority,
    // }) !!!
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
    <>
      <div className={styles.containerInput}>
        <div className={styles.inputTitle}>
          <TextField
            sx={{ minWidth: MIN_WIDTH }}
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
            sx={{ minWidth: MIN_WIDTH }}
            value={inputDescription}
            onKeyPress={handleAddToListByEnter}
            onChange={handlerChangeDescription}
            label="Description of task"
            variant="outlined"
          />
        </div>

        <div className={styles.priority}>
          <FormControl fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select
              sx={{ minWidth: MIN_WIDTH_SELECT }}
              value={priority}
              label="priority"
              onChange={(e) => setPriority(e.target.value as Priority)}
            >
              <MenuItem value={Priority.LOW}>{Priority.LOW}</MenuItem>
              <MenuItem value={Priority.MEDIUM}>{Priority.MEDIUM}</MenuItem>
              <MenuItem value={Priority.HIGH}>{Priority.HIGH}</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className={styles.data}>{datePickers()}</div>
        <CommonButton
          disabled={!inputTitle}
          className={styles.add}
          onClick={handleAddToListByButton}
          variant="contained"
        >
          add
        </CommonButton>
      </div>
    </>
  );
};

export default Input;

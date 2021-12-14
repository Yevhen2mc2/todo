import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskItem } from "../../todo/types/types";

interface InitialState {
  list: TaskItem[] | [];
}

const initialState: InitialState = {
  list: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    putTaskToStore(state, action: PayloadAction<TaskItem>) {
      // state.list.push(action.payload); ?
      state.list[0] = action.payload;
    },
  },
});

export default todoSlice.reducer;

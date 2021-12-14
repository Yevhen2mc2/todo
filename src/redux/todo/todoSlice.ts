import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Priority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export interface TaskItem {
  id: number;
  title: string;
  description: string;
  deadline: Date | null;
  priority: Priority;
}

interface InitialState {
  list: TaskItem[] | [];
}

const initialState: InitialState = {
  list: [],
};

export const todoSlice = createSlice({
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

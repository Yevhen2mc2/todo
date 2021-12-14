import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Priority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export interface ITaskItem {
  id: number;
  title: string;
  description: string;
  deadline: string | null;
  priority: Priority;
}

interface ITodosList {
  list: ITaskItem[] | [];
}

const initialState: ITodosList = {
  list: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    putTaskToStore(state, action: PayloadAction<ITaskItem[]>) {
      state.list = action.payload;
    },
  },
});

export default todoSlice.reducer;

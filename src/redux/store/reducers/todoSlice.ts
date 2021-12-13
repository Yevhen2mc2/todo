import { createSlice } from "@reduxjs/toolkit";
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
  reducers: {},
});

// export const TodoReducer = (state = initialState, action: TASKS_ACTIONS) => {
//     switch (action.type) {
//         case actionsTypes.PUT_TASKS_TO_STORE: {
//             return { ...state, list: action.payload };
//         }
//
//         default:
//             return state;
//     }
// };

export default todoSlice.reducer;

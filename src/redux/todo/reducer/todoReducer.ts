import { actionsTypes, TASKS_ACTIONS, TaskItem } from "../types/types";

interface InitialState {
  list: TaskItem[] | [];
}

const initialState: InitialState = {
  list: [],
};

export const TodoReducer = (state = initialState, action: TASKS_ACTIONS) => {
  switch (action.type) {
    case actionsTypes.PUT_TASKS_TO_STORE: {
      return { ...state, list: action.payload };
    }

    default:
      return state;
  }
};

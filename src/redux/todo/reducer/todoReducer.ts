import { actionsTypes, TASKS_ACTIONS, TaskItem } from "../types/types";
import { User } from "../../../localStorage/localStorage";

interface InitialState {
  list: TaskItem[] | [];
  user: User | null;
}

const initialState: InitialState = {
  list: [],
  user: null,
};

export const TodoReducer = (state = initialState, action: TASKS_ACTIONS) => {
  switch (action.type) {
    case actionsTypes.PUT_TASKS_TO_STORE: {
      return { ...state, list: action.payload };
    }

    case actionsTypes.SET_USER: {
      return { ...state, user: action.payload };
    }

    case actionsTypes.LOGOUT_USER: {
      return { ...state, user: null };
    }

    default:
      return state;
  }
};

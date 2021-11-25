import { actionsTypes, TASKS_ACTIONS, TaskItem } from "../types/types";

interface InitialState {
  list: TaskItem[] | [];
}

const initialState: InitialState = {
  list: [],
};

export const TodoReducer = (state = initialState, action: TASKS_ACTIONS) => {
  switch (action.type) {
    case actionsTypes.ADD_NEW_TASK: {
      return { ...state, list: [...state.list, action.payload] };
    }

    case actionsTypes.UPDATE_TASK: {
      const newTasks: TaskItem[] = state.list.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
      return { ...state, list: newTasks };
    }

    case actionsTypes.PUT_TASKS_TO_STORE: {
      return { ...state, list: action.payload };
    }

    default:
      return state;
  }
};

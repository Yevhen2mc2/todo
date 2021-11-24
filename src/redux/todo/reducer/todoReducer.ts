import { actionsTypes, TASKS_ACTIONS, TaskItem } from "../types/types";

interface InitialState {
  list: TaskItem[] | [];
  selectedTodo: string | null;
}

const initialState: InitialState = {
  list: [],
  selectedTodo: null,
};

export const TodoReducer = (state = initialState, action: TASKS_ACTIONS) => {
  switch (action.type) {
    case actionsTypes.ADD_NEW_TASK: {
      return { ...state, list: [...state.list, action.payload] };
    }

    case actionsTypes.REMOVE_TASK: {
      return {
        ...state,
        list: state.list
          .filter((task) => task.id !== action.payload)
          .map((task, index) => {
            return { ...task, numb: index + 1 };
          }),
      };
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
      // console.log("PUT IN STORE, action.payload:", action.payload);
      // console.log("new store:", { ...state, list: action.payload });
      return { ...state, list: action.payload };
    }

    default:
      return state;
  }
};

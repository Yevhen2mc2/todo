import { combineReducers } from "redux";
import { TodoReducer } from "./todo/reducer/todoReducer";

const rootReducer = combineReducers({
  todo: TodoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

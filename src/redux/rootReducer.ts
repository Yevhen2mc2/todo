import { combineReducers } from "redux";
import { TodoReducer } from "./todo/reducer/todoReducer";
import { userReducer } from "./user/reducer/userReducer";

const rootReducer = combineReducers({
  todo: TodoReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

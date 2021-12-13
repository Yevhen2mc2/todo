import { combineReducers } from "redux";
import { TodoReducer } from "./todo/reducer/todoReducer";
import { userReducer } from "./user/reducer/userReducer";
import { SystemReducer } from "./system/reducer/systemReducer";

const rootReducer = combineReducers({
  todo: TodoReducer,
  user: userReducer,
  system: SystemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

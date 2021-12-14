import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./user/userSlice";
import systemReducer from "./system/systemSlice";
import todoReducer from "./todo/todoSlice";

const rootReducer = combineReducers({
  userReducer,
  systemReducer,
  todoReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "./store/reducers/userSlice";
import systemReducer from "./store/reducers/systemSlice";
import todoReducer from "./store/reducers/todoSlice";

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

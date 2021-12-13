import { actionsTypes } from "../../todo/types/types";
import { User } from "../types/types";

export const setUser = (user: User) => {
  return {
    type: actionsTypes.SET_USER,
    payload: user,
  };
};

export const logoutUser = () => {
  return {
    type: actionsTypes.LOGOUT_USER,
  };
};

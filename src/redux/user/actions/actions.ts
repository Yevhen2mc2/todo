import { actionsTypes } from "../../todo/types/types";
import { IUser } from "../../store/reducers/userSlice";

export const setUser = (user: IUser) => {
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

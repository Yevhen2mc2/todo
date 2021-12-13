import { actionsTypes } from "../../todo/types/types";

export interface User {
  email: string;
}

export type USER_ACTIONS = ISetUser | ILogoutUser;

export interface ISetUser {
  type: typeof actionsTypes.SET_USER;
  payload: string;
}

export interface ILogoutUser {
  type: typeof actionsTypes.LOGOUT_USER;
}

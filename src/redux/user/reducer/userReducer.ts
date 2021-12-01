import { actionsTypes } from "../../todo/types/types";
import { User, USER_ACTIONS } from "../types/types";

const initialUserState: User = {
  email: "",
};

export const userReducer = (state = initialUserState, action: USER_ACTIONS) => {
  switch (action.type) {
    case actionsTypes.SET_USER: {
      return { ...state, email: action.payload };
    }

    case actionsTypes.LOGOUT_USER: {
      return { ...state, email: "" };
    }

    default:
      return state;
  }
};

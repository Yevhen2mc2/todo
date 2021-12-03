import { RootState } from "../../rootReducer";

export const getLoginState = () => (state: RootState) => !!state.user;

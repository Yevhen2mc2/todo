import { RootState } from "../../index";

export const getError = () => (state: RootState) => state.systemReducer.error;
export const getLoading = () => (state: RootState) =>
  state.systemReducer.loading;

import { RootState } from "../../rootReducer";

export const getError = () => (state: RootState) => state.system.error;
export const getLoading = () => (state: RootState) => state.system.loading;

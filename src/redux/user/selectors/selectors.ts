import { RootState } from "../../rootReducer";

export const getUserEmail =
  () =>
  (state: RootState): string =>
    state.user.email;

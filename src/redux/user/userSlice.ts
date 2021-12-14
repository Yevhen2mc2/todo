import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  email: string;
}

const initialUserState: IUser = {
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    logout(state) {
      state.email = "";
    },
  },
});

export default userSlice.reducer;

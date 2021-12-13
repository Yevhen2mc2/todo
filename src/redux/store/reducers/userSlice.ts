import { createSlice } from "@reduxjs/toolkit";

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
    setUser(state, action) {
      state.email = action.payload;
    },
  },
});

export default userSlice.reducer;

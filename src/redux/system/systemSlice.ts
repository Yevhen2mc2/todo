import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SystemState {
  loading: boolean;
  loaded: boolean;
  error: string | null;
}

const initialSystemState: SystemState = {
  loading: false,
  loaded: false,
  error: null,
};

export const systemSlice = createSlice({
  name: "system",
  initialState: initialSystemState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setLoaded(state, action: PayloadAction<boolean>) {
      state.loaded = action.payload;
    },
    setError(state, action: PayloadAction<null | string>) {
      state.error = action.payload;
    },
  },
});

export default systemSlice.reducer;

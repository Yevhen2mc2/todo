import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});

export default systemSlice.reducer;

// export const SystemReducer = (
//     state = initialSystemState,
//     action: SYSTEM_ACTIONS
// ): SystemState => {
//     switch (action.type) {
//         case actionsSystem.SET_LOADING: {
//             return { ...state, loading: action.payload };
//         }
//
//         case actionsSystem.SET_LOADED: {
//             return { ...state, loaded: action.payload };
//         }
//
//         case actionsSystem.SET_ERROR: {
//             return { ...state, error: action.payload };
//         }
//
//         default:
//             return state;
//     }
// };

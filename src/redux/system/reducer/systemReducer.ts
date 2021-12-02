import { actionsSystem, SYSTEM_ACTIONS } from "../types/types";

interface InitialSystemState {
  loading: boolean;
  loaded: boolean;
  error: string | null;
}

const initialSystemState: InitialSystemState = {
  loading: false,
  loaded: false,
  error: null,
};

export const SystemReducer = (
  state = initialSystemState,
  action: SYSTEM_ACTIONS
): InitialSystemState => {
  switch (action.type) {
    case actionsSystem.SET_LOADING: {
      return { ...state, loading: action.payload };
    }

    case actionsSystem.SET_LOADED: {
      return { ...state, loaded: action.payload };
    }

    case actionsSystem.SET_ERROR: {
      return { ...state, error: action.payload };
    }

    default:
      return state;
  }
};

import { actionsSystem } from "../types/types";

export const setLoading = (value: boolean) => {
  return {
    type: actionsSystem.SET_LOADING,
    payload: value,
  };
};

export const setLoaded = (value: boolean) => {
  return {
    type: actionsSystem.SET_LOADED,
    payload: value,
  };
};

export const setError = (value: boolean) => {
  return {
    type: actionsSystem.SET_ERROR,
    payload: value,
  };
};

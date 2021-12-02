import { actionsSystem } from "../types/types";

export const setLoading = (value) => {
  return {
    type: actionsSystem.SET_LOADING,
    payload: value,
  };
};

export const setLoaded = (value) => {
  return {
    type: actionsSystem.SET_LOADED,
    payload: value,
  };
};

export const setError = (value) => {
  return {
    type: actionsSystem.SET_ERROR,
    payload: value,
  };
};

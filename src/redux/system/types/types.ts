export enum actionsSystem {
  SET_LOADING = "SET_LOADING",
  SET_LOADED = "SET_LOADED",
  SET_ERROR = "SET_ERROR",
}

export type SYSTEM_ACTIONS = ISetLoading | ISetLoaded | ISetError;

export interface ISetLoading {
  type: typeof actionsSystem.SET_LOADING;
  payload: boolean;
}

export interface ISetError {
  type: typeof actionsSystem.SET_LOADED;
  payload: boolean;
}

export interface ISetLoaded {
  type: typeof actionsSystem.SET_ERROR;
  payload: null | string;
}

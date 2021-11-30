import { User } from "../../../localStorage/localStorage";

export enum actionsTypes {
  PUT_TASKS_TO_STORE = "PUT_TASKS_TO_STORE",
  SET_USER = "SET_USER",
}

export enum Priority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export interface IPutTasks {
  type: typeof actionsTypes.PUT_TASKS_TO_STORE;
  payload: TaskItem[];
}

export interface ISetUser {
  type: typeof actionsTypes.SET_USER;
  payload: User;
}

export type TASKS_ACTIONS = IPutTasks | ISetUser;

export interface TaskItem {
  id?: number;
  title: string;
  description: string;
  deadline: Date | null;
  priority: Priority;
}

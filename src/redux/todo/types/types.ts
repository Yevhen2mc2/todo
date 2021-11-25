export enum actionsTypes {
  ADD_NEW_TASK = "ADD_NEW_TASK",
  UPDATE_TASK = "UPDATE_TASK",
  PUT_TASKS_TO_STORE = "PUT_TASKS_TO_STORE",
}

export enum Priority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export interface IAddNewTask {
  type: typeof actionsTypes.ADD_NEW_TASK;
  payload: TaskItem;
}

export interface IUprateTask {
  type: typeof actionsTypes.UPDATE_TASK;
  payload: TaskItem;
}

export interface IPutTasks {
  type: typeof actionsTypes.PUT_TASKS_TO_STORE;
  payload: TaskItem[];
}

export type TASKS_ACTIONS = IAddNewTask | IUprateTask | IPutTasks;

export interface TaskItem {
  id?: number;
  title: string;
  description: string;
  deadline: Date | null;
  priority: Priority;
}

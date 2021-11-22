export enum actionsTypes {
  ADD_NEW_TASK = "ADD_NEW_TASK",
  REMOVE_TASK = "REMOVE_TASK",
  UPDATE_TASK = "UPDATE_TASK",
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

export interface IRemoveTask {
  type: typeof actionsTypes.REMOVE_TASK;
  payload: TaskItem;
}

export interface IUprateTask {
  type: typeof actionsTypes.UPDATE_TASK;
  payload: TaskItem;
}

export type TASKS_ACTIONS = IAddNewTask | IRemoveTask | IUprateTask;

export interface TaskItem {
  id: string;
  title: string;
  description: string;
  deadline: Date | null;
  priority: Priority;
  numb?: number;
}

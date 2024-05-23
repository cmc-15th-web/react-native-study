import {create} from 'zustand';

export interface TaskProps {
  task: string;
  isCompleted: boolean;
}

export interface TaskStoreProps {
  task: string;
  taskList: TaskProps[];
  setTask: (input: string) => void;
  setTaskList: (input: Array<TaskProps>) => void;
}

export const useTask = create<TaskStoreProps>(set => ({
  task: '',
  taskList: [],
  setTask: (input: string) => set({task: input}),
  setTaskList: (input: Array<TaskProps>) => set({taskList: [...input]}),
}));

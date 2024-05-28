import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const useTask = create<TaskStoreProps, [['zustand/persist', unknown]]>(
  persist(
    set => ({
      task: '',
      taskList: [],
      setTask: (input: string) => set({task: input}),
      setTaskList: (input: Array<TaskProps>) => set({taskList: [...input]}),
    }),
    {
      name: 'task-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

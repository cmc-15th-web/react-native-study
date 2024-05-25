import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ThemeColorType =
  | 'primaryOrange'
  | 'primaryGreen'
  | 'primaryBlue'
  | 'primaryPurple'
  | 'primaryPink';

type TodoItemType = {
  id: string;
  text: string;
  completed: boolean;
};

type CustomStoreType = {
  theme: ThemeColorType;
  setTheme: (theme: ThemeColorType) => void;
  tasks: TodoItemType[];
  addTask: (task: TodoItemType) => void;
  clearStorage: () => void;
  deleteTask: (taskId: string) => void;
  toggleTaskCompletion: (taskId: string) => void;
};

export const useCustomStore = create<CustomStoreType>()(
  persist(
    (set, get, api) => ({
      theme: 'primaryOrange',
      setTheme: theme => set({theme}),
      tasks: [],
      addTask: task => set({tasks: [...get().tasks, task]}),
      clearStorage: () => {
        AsyncStorage.clear().then(() => {
          api.persist.clearStorage();
        });
      },
      deleteTask: taskId =>
        set({tasks: get().tasks.filter(task => task.id !== taskId)}),
      toggleTaskCompletion: taskId =>
        set({
          tasks: get().tasks.map(task =>
            task.id === taskId ? {...task, completed: !task.completed} : task,
          ),
        }),
    }),
    {name: 'kyh_todo_app', storage: createJSONStorage(() => AsyncStorage)},
  ),
);

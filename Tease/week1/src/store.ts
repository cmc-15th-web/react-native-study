import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from './styles/commonStyle';

type ColorKeys = keyof typeof colors;

interface Todo {
  id: number;
  content: string;
  check: boolean;
}

interface StoreState {
  color: ColorKeys;
  setColor: (value: string) => void;
  todos: Todo[];
  todoId: number;
  addTodo: (value: Todo) => void;
  addTodoId: () => void;
  updateTodo: (todos: Todo[]) => void;
}

export const useStore = create<StoreState>(
  persist(
    (set, get) => ({
      //colors
      color: 'orange' as ColorKeys,
      setColor: value => set({color: value}),
      //todos
      todos: [],
      todoId: 0,
      addTodo: value => set({todos: [value, ...get().todos]}),
      addTodoId: () => set({todoId: get().todoId + 1}),
      updateTodo: value => set({todos: value}),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

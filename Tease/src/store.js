import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStore = create(
  persist(
    (set, get) => ({
      //colors
      color: 'orange',
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

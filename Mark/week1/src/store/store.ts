import { create } from 'zustand';
import palette from '../constants/palette';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Store {
  color: string;
  todos: ToDo[];
  setColor: (color: string) => void;
  setToDos: (todos: ToDo[]) => void;
  addToDo: (todos: ToDo) => void;
  removeToDo: (id: number) => void;
}
export const useStore = create<Store>((set)=>({
  color: palette.orange,
  todos: [],
  setColor: (color: string) => set({color: color}),
  setToDos: (todos: ToDo[]) => set({todos: todos}),
  addToDo: (todo: ToDo) => set((state) => {
    const updated = [...state.todos, todo];
    AsyncStorage.setItem('todos', JSON.stringify(updated));
    return {todos: updated};
  }),
  removeToDo: (id: number) => set((state) => {
    const filtered = state.todos.filter(todo => todo.id !== id);
    AsyncStorage.setItem('todos', JSON.stringify(filtered));
    return {todos: filtered};
  })
}))

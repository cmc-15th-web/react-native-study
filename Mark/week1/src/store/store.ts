import { create } from 'zustand';
import palette from '../constants/palette';

interface Store {
  color: string;
  todos: ToDos[];
  setColor: (color: string) => void;
  setToDos: (todos: []) => void;
}
export const useStore = create<Store>((set)=>({
  color: palette.orange,
  todos: [],
  setColor: (state: string) => set({color: state}),
  setToDos: (state: []) => set({todos: [...state]}),
}))

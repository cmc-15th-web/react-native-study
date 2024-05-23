import {create} from 'zustand';
import {v4 as uuidv4} from 'uuid';

type ToDoItem = {
  id: string;
  title: string;
  status: boolean;
};

type ToDoStore = {
  toDoList: ToDoItem[];
  save: boolean;
  addToDo: (title: string) => void;
  toggleStatus: (id: string) => void;
  removeToDo: (id: string) => void;
  setSave: (value: boolean) => void;
};

export const useToDoStore = create<ToDoStore>(set => ({
  toDoList: [],
  save: false,
  addToDo: title =>
    set(state => ({
      toDoList: [
        ...state.toDoList,
        {id: Math.random().toString(), title, status: false},
      ],
    })),
  toggleStatus: id =>
    set(state => ({
      toDoList: state.toDoList.map(item =>
        item.id === id ? {...item, status: !item.status} : item,
      ),
    })),
  removeToDo: id =>
    set(state => ({
      toDoList: state.toDoList.filter(item => item.id !== id),
    })),
  setSave: (value: boolean) => {
    set({save: value});
  },
}));

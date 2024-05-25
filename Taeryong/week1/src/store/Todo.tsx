import {create} from 'zustand';
import {Alert} from 'react-native';

// todolist 상태관리
interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export const useTodoStore = create<TodoStore>(set => ({
  todos: [],
  addTodo: title =>
    set(state => ({
      todos: [
        ...state.todos,
        {id: Math.random().toString(), title, completed: false},
      ],
    })),
  toggleTodo: id =>
    set(state => ({
      todos: state.todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    })),
  deleteTodo: id => {
    Alert.alert(
      '',
      '정말 삭제하시겠습니까?',
      [
        {
          text: '취소',
        },
        {
          text: '확인',
          onPress: () =>
            set(state => ({
              todos: state.todos.filter(todo => todo.id !== id),
            })),
        },
      ],
      {cancelable: false},
    );
  },
}));

// 완료 버튼 상태 관리
interface ButtonStore {
  isPressed: boolean;
  setPressed: (pressed: boolean) => void;
}

export const useButtonStore = create<ButtonStore>(set => ({
  isPressed: false,
  setPressed: pressed => set({isPressed: pressed}),
}));

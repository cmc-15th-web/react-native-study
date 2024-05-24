import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import TodoListItem from '@/components/TodoListItem';
import {useTodoStore} from '@/store/Todo';
import {useThemeStore} from '@/store/Theme';
import Colors from '@/constants/Colors';

const TodoList = () => {
  const {color: themeColor} = useThemeStore();
  const todos = useTodoStore(state => state.todos);
  const toggleTodo = useTodoStore(state => state.toggleTodo);
  const deleteTodo = useTodoStore(state => state.deleteTodo);

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TodoListItem
            title={item.title}
            onToggleCompleted={() => toggleTodo(item.id)}
            onDelete={() => deleteTodo(item.id)}
            color={themeColor}
          />
        )}
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: Colors.Gray,
  },
  listContentContainer: {
    marginTop: 25,
    paddingHorizontal: 32,
    gap: 18,
    paddingBottom: 20,
  },
});

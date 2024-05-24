// components/AddTask.tsx
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {useTodoStore, useButtonStore} from '@/store/Todo';
import Colors from '@/constants/Colors';

const AddTask = () => {
  const [task, setTask] = useState('');
  const addTodo = useTodoStore(state => state.addTodo);
  const {isPressed, setPressed} = useButtonStore();

  useEffect(() => {
    if (isPressed && task.trim().length > 0) {
      addTodo(task.trim());
      setTask('');
      setPressed(false);
    }
  }, [isPressed, task, addTodo, setPressed]);

  const handleAddTask = () => {
    if (task.trim().length > 0) {
      addTodo(task.trim());
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="할 일을 입력하세요."
        value={task}
        onChangeText={setTask}
        returnKeyType="done"
        onSubmitEditing={handleAddTask}
      />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Gray,
    paddingHorizontal: 32,
    paddingTop: 16,
  },
  input: {
    backgroundColor: Colors.White,
    width: '100%',
    height: 58,
    paddingHorizontal: 30,
    marginBottom: 10,
    borderWidth: 0,
    borderRadius: 20,
  },
});

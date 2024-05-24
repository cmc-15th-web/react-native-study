import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CheckIcon from '@/assets/icons/Check';
import CircleIcon from '@/assets/icons/Circle';
import TrashIcon from '@/assets/icons/Trash';
import Colors from '@/constants/Colors';

interface TodoListItemProps {
  title: string;
  onToggleCompleted: (completed: boolean) => void;
  onDelete: () => void;
  color: string;
}

const TodoListItem = ({
  title,
  onToggleCompleted,
  onDelete,
  color,
}: TodoListItemProps) => {
  const [completed, setCompleted] = useState(false);

  const handleToggle = () => {
    const newCompletedStatus = !completed;
    setCompleted(newCompletedStatus);
    onToggleCompleted(newCompletedStatus);
  };

  return (
    <View
      style={[styles.container, completed ? {backgroundColor: color} : null]}>
      <TouchableOpacity onPress={handleToggle}>
        {completed ? <CheckIcon /> : <CircleIcon />}
      </TouchableOpacity>
      <Text
        style={[
          styles.title,
          completed ? {color: Colors.White} : {color: Colors.Black},
        ]}>
        {title}
      </Text>
      <TouchableOpacity onPress={onDelete}>
        <TrashIcon colorProps={completed ? Colors.White : color} />
      </TouchableOpacity>
    </View>
  );
};
export default TodoListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: 56,
    backgroundColor: Colors.White,
    borderRadius: 20,
  },
  title: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});

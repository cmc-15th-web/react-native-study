import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useToDoStore} from '../stores/ToDoStore';

import CheckSvg from '../assets/img/Check.svg';
import CircleSvg from '../assets/img/Circle.svg';
import TrashSvg from '../assets/img/Trash.svg';

type ToDoItemProps = {
  id: string;
  title: string;
  status: boolean;
};

const ToDoItem: React.FC<ToDoItemProps> = ({id, title, status}) => {
  const {toggleStatus, removeToDo} = useToDoStore();

  const handleToggleStatus = () => {
    toggleStatus(id);
  };

  const handleRemoveToDo = () => {
    removeToDo(id);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={handleToggleStatus}
        style={[styles.container, status ? styles.completedContainer : null]}>
        {status ? (
          <CheckSvg width={30} height={30} />
        ) : (
          <CircleSvg width={30} height={30} />
        )}

        <Text style={[styles.title, status ? styles.completed : null]}>
          {title}
        </Text>

        <TouchableOpacity onPress={handleRemoveToDo}>
          <TrashSvg
            width={30}
            height={30}
            style={[status ? {color: 'FFFFFF'} : null]}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    marginHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    marginEnd: 'auto',
    marginLeft: 8,
  },
  completedContainer: {
    backgroundColor: 'orange',
    color: 'white',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default ToDoItem;

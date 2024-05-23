import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {useToDoStore} from '../stores/ToDoStore';
import ToDoItem from '../component/ToDoItem';

export function ListScreen() {
  const {toDoList} = useToDoStore();

  return (
    <View style={styles.container}>
      <FlatList
        data={toDoList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ToDoItem id={item.id} title={item.title} status={item.status} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  input: {
    marginVertical: 5,
    marginHorizontal: 25,
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderRadius: 20,
  },
});

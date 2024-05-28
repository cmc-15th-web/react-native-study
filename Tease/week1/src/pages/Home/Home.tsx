import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header.js';
import {useStore} from '../../store.js';
import HomeModal from '../../components/HomeModal.js';

interface TodoItem {
  id: number;
  content: string;
  check: boolean;
}

const Home: React.FC = () => {
  const {color, todos, updateTodo} = useStore(state => state);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [deleteTodoItem, setDeleteTodoItem] = useState<TodoItem | null>(null);

  const removeTodo = (item: TodoItem) => {
    const newTodos = todos.filter(e => {
      if (e.id !== item.id) {
        return e;
      }
    });
    updateTodo(newTodos);
  };

  const renderItem = ({item}: {item: TodoItem}) => {
    const clickTodoHandler = () => {
      const newTodos = todos.map(e => {
        if (e.id === item.id) {
          return {...e, check: !e.check};
        } else {
          return {...e};
        }
      });
      updateTodo(newTodos);
    };
    const homeModalVisible = (item: TodoItem) => {
      setModalVisible(!modalVisible);
      setDeleteTodoItem(item);
    };

    return (
      <TouchableOpacity
        style={[
          styles.todoContentContainer,
          {backgroundColor: item.check ? color : '#fff'},
        ]}
        onPress={clickTodoHandler}>
        <View style={styles.todoContentWrapper}>
          <View style={styles.todoContentLeft}>
            {item.check ? (
              <View style={styles.checkCircle}>
                <CheckIcon width={24} height={24} fill={color} />
              </View>
            ) : (
              <CircleIcon width={24} height={24} fill={color} />
            )}
            <Text
              style={[{color: item.check ? '#fff' : '#000'}, styles.todoText]}>
              {item.content}
            </Text>
          </View>
          <TouchableOpacity onPress={() => homeModalVisible(item)}>
            {item.check ? (
              <TrashIcon width={24} height={24} fill={'#fff'} />
            ) : (
              <TrashIcon width={24} height={24} fill={color} />
            )}
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <HomeModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        removeTodo={removeTodo}
        deleteTodoItem={deleteTodoItem}
      />
      <Header title={'Today'} />
      <View style={styles.contentsWrapper}>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item: TodoItem) => item.id}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentsWrapper: {
    flex: 1,
    marginVertical: 25,
    marginHorizontal: 32,
  },
  //todo
  todoContentContainer: {
    width: '100%',
    height: 56,
    borderRadius: 20,
    marginBottom: 18,
    justifyContent: 'center',
  },
  todoContentWrapper: {
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todoContentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkCircle: {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  todoText: {
    marginLeft: 10,
  },
});

import TrashIcon from '../../assets/icons/Trash.js';
import CheckIcon from '../../assets/icons/Check.js';
import CircleIcon from '../../assets/icons/Circle.js';

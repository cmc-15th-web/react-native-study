import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {useStore} from '../../store.ts';
import AddModal from '../../components/AddModal.tsx';
import {useNavigation} from '@react-navigation/native';

interface TodoItem {
  id: number;
  check: boolean;
  content: string;
}

const Add: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const inputRef = useRef();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const {color, todoId, addTodo, addTodoId} = useStore(state => state);
  const navigation = useNavigation();

  const addTodoHandler = () => {
    const todoItem: TodoItem = {
      id: todoId,
      check: false,
      content: keyword,
    };
    addTodo(todoItem);
    addTodoId();
    setModalVisible(!modalVisible);
    // navigation.navigate('MainTab');
  };
  const moveMainTab = () => {
    navigation.navigate('MainTab');
  };
  return (
    <SafeAreaView style={styles.container}>
      <AddModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        moveMainTab={moveMainTab}
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackIcon width={24} height={24} fill={color} />
        </TouchableOpacity>
        <View>
          <Text style={[{color: color}, styles.headerText]}>
            할일을 추가해주세요!
          </Text>
        </View>
        <TouchableOpacity onPress={addTodoHandler}>
          <Text style={{color: color}}>완료</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          returnKeyType="search"
          spellCheck={false}
          autoCorrect={false}
          autoCapitalize="none"
          value={keyword}
          onChangeText={text => setKeyword(text)}
          allowFontScaling={false}
          style={styles.inputStyle}
          autoFocus
          ref={inputRef}
        />
      </View>
    </SafeAreaView>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {
    marginHorizontal: 20,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '400',
  },
  inputWrapper: {
    height: 56,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 32,
    borderRadius: 20,
  },
  inputStyle: {
    flex: 1,
    paddingVertical: 16,
    paddingLeft: 30,
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    alignItems: 'center',
  },
});

import ArrowBackIcon from '../../assets/icons/ArrowBack.js';

import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../components/types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TrashBtn, CheckIcon} from '../assets/icons';
import {useTheme} from '../context/ThemeContext';

// HomeScreenRouteProp 타입을 정의하여 RouteProp에서 'Home' 화면의 매개변수 타입을 가져온다.
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface HomeProps {
  route: HomeScreenRouteProp;
}

// Todo 인터페이스를 정의하여 할 일의 구조를 정의
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const Home: React.FC<HomeProps> = ({route}) => {
  // useState를 사용하여 todos 상태를 정의. 초기값은 빈 배열임
  const [todos, setTodos] = useState<Todo[]>([]);
  const {themeColor} = useTheme(); // useTheme 훅을 사용하여 테마 색상을 가져옴

  // useEffect 훅을 사용하여 route의 params가 변경될 때마다 실행
  // todo, route.params 부분에 빨간 밑줄 그이는 거 해결해야함. 임시 저장
  useEffect(() => {
    if (route.params?.todo) {
      const todoExists = todos.some(todo => todo.id === route.params.todo.id);
      // 새로 추가된 할 일이 기존의 목록에 없는 경우에만 추가 -> css를 변경 후 저장하면 새로운 할 일이 추가되는 것을 방지했음
      if (!todoExists) {
        setTodos(prevTodos => [
          ...prevTodos,
          {...route.params.todo, completed: false},
        ]);
      }
    }
  }, [route.params?.todo]); // route의 params가 변경될 때마다 실행됨

  // 삭제 함수
  const handleDelete = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  // 할 일의 완료 상태를 토글하는 함수
  const toggleComplete = (id: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {todos.length === 0 ? (
        <Text>할 일이 없습니다</Text>
      ) : (
        // 할 일 목록을 FlatList로 렌더링
        <FlatList
          style={styles.listContainer} // FlatList의 스타일을 지정
          data={todos} // 렌더링할 데이터 배열을 설정. 여기서는 todos 배열이다.
          keyExtractor={item => item.id} // 각 항목의 고유 키를 설정. 여기서는 각 할 일의 id를 사용
          renderItem={(
            {item}, // 각 항목을 렌더링하는 방법을 정의
          ) => (
            <TouchableOpacity
              style={[
                styles.todoItem,
                item.completed && {backgroundColor: themeColor},
              ]}
              onPress={() => toggleComplete(item.id)}>
              <View style={styles.checkboxContainer}>
                <View
                  style={[
                    styles.checkbox,
                    item.completed
                      ? {backgroundColor: '#fff', borderColor: themeColor}
                      : {borderColor: themeColor},
                  ]}>
                  {item.completed && <CheckIcon fill={themeColor} />}
                </View>
                <Text
                  style={[styles.todoText, item.completed && {color: '#fff'}]}>
                  {item.text}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => handleDelete(item.id)}
                style={{marginRight: 20}}>
                <TrashBtn fill={item.completed ? '#fff' : themeColor} />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: '5%',
  },

  listContainer: {
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoItem: {
    flexDirection: 'row', // 수평 정렬
    justifyContent: 'space-evenly', // 간격 유지
    alignItems: 'center', // 수직 가운데 정렬
    padding: 10,
    borderRadius: 18,
    width: '85%',
    height: 50,
    alignSelf: 'center',
    marginVertical: 5, // 할 일 상자 사이 간격
    backgroundColor: 'white',
  },

  // 맨 왼쪽 체크 박스
  checkbox: {
    width: 20,
    height: 20,
    marginLeft: 20,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  // 할 일 제목
  todoText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16, // 목록의 높이가 50이기에 16으로 설정. 피그마의 경우 높이 56, fontsize 18으로 약 3배임
  },
});

export default Home;

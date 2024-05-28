import {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useToDoStore} from '../stores/ToDoStore';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Add: undefined;
};

type AddScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Add'
>;

export function AddScreen({navigation}: {navigation: AddScreenNavigationProp}) {
  // AddScreen 컴포넌트의 내용은 여기에 올 수 있습니다.
  const [title, setTitle] = useState<string>(''); // 새로운 ToDo의 제목 상태
  const {addToDo, save, setSave} = useToDoStore(); // Zustand를 사용하여 ToDo를 추가하는 함수 가져오기

  useEffect(() => {
    if (save) {
      AddToDo();
      setSave(false);
    }
  }, [save]);

  const AddToDo = () => {
    if (title.trim() !== '') {
      addToDo(title); // Zustand를 사용하여 ToDo를 추가
      setTitle(''); // 입력 필드 비우기
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="할일을 입력하세요"
        value={title}
        onChangeText={setTitle}
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

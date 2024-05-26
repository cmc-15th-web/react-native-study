import React, {useState, useLayoutEffect} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../components/types';
import {headerRightBtn} from '../components/Add/headerRightBtn';

type AddScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Add'
>;

interface AddProps {
  navigation: AddScreenNavigationProp;
}

const Add: React.FC<AddProps> = ({navigation}) => {
  const [text, setText] = useState('');

  // navigation.setOptions를 통해 네비게이션 옵션을 설정
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => headerRightBtn({handleComplete}),
    });
  }, [navigation, text]);

  const handleComplete = () => {
    if (text.trim()) {
      navigation.navigate('홈', {
        todo: {
          id: Date.now().toString(),
          text: text.trim(),
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="할 일을 입력하세요"
        value={text}
        onChangeText={setText}
      />
      {/* 완료 테스트 버튼 */}
      {/* <TouchableOpacity onPress={handleComplete}>
        <Text>완료</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  input: {
    width: '80%',
    height: 56,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    borderRadius: 20,
  },
});

export default Add;

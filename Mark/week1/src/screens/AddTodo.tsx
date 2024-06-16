import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ArrowBackSvg from '../assets/icon_arrow_back.svg';
import { useStore } from '../store/store';
import palette from '../constants/palette';

const AddToDo = () => {
  const [text, setText] = useState<string>('');

  return (
    <View>
      <Header text={text}/>
      <TextInput style={styles.text_input} onChangeText={value => setText(value)}/>
    </View>
  );
};

type Props = {
  text: string;
}

const Header = ({text}: Props) => {
  const navigation = useNavigation();
  const color = useStore(state => state.color);
  const addToDo = useStore(state => state.addToDo);
  
  const handlePress = async () => {
    if (text.length < 1) {
      Alert.alert('', '1글자 이상 작성해주세요!');
      return;
    }
    Alert.alert('', '할일이 추가되었습니다!');
    addToDo({id: Date.now(), text: text});
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowBackSvg color={color}/>
      </TouchableOpacity>
      <Text style={[styles.title, {color: color}]}>할일을 추가해주세요!</Text>
      <TouchableOpacity>
        <Text onPress={handlePress} style={[styles.btn_done, {color: color}]}>완료</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
  btn_done: {
    fontSize: 16,
    textAlign: 'center',
  },
  text_input: {
    height: 56,
    paddingVertical: 16,
    paddingHorizontal: 29,
    backgroundColor: palette.white,
    marginHorizontal: 32,
    marginTop: 20,
    borderRadius: 20,
  }
})

export default AddToDo;
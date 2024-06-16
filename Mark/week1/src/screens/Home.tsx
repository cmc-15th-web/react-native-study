import { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useStore } from "../store/store";
import palette from "../constants/palette";
import CheckSvg from '../assets/icon_check.svg';
import CircleSvg from '../assets/icon_circle.svg';
import TrashSvg from '../assets/icon_trash.svg';

const Home = () => {
  const todos = useStore<ToDo[]>(state => state.todos);

  const renderItem = ({item}: {item: ToDo}) => (
    <ToDo id={item.id} text={item.text} />
  );

  return todos.length > 0 ? (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    />
  ) : (
    <Text style={{textAlign: 'center'}}>할일이 없습니다!</Text>
  );
};

const ToDo = ({id, text}: ToDo) => {
  const color = useStore(state => state.color);
  const removeToDo = useStore(state => state.removeToDo);
  const [checked, setChecked] = useState(false);

  const handleRemove = () => {
    Alert.alert('', '정말로 삭제하시겠습니까?', [
      {text: '취소', onPress: () => {}, style: 'cancel'},
      {text: '삭제', onPress: () => removeToDo(id), style: 'destructive'},
    ]);
  };

  return (
    <TouchableOpacity
      onPress={() => setChecked(!checked)}
      style={[
        styles.wrapper,
        {backgroundColor: checked ? color : palette.white},
      ]}>
      {checked ? <CheckSvg /> : <CircleSvg color={color} />}

      <Text
        style={[
          styles.toDoText,
          {color: checked ? palette.white : palette.black},
        ]}>
        {text}
      </Text>
      <TouchableOpacity onPress={handleRemove}>
        <TrashSvg color={checked ? palette.white : color}/>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: 25,
    marginBottom: 50,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 20,
    gap: 10,
    marginBottom: 10,
  },
  toDoText: {
    flex: 1,
    fontSize: 18,
  },
  trash: {
    
  }
})

export default Home;
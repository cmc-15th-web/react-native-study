import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useStore } from "../store/store";
import palette from "../constants/palette";
import CheckSvg from '../assets/icon_check.svg';
import CircleSvg from '../assets/icon_circle.svg';

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
  const [checked, setChecked] = useState(false);

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
      <TouchableOpacity />
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
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 20,
    gap: 10,
    marginBottom: 10,
  },
  toDoText: {
    fontSize: 18,
  }

})

export default Home;
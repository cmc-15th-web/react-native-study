import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useStore } from "../store/store";
import palette from "../constants/palette";
import CheckSvg from '../assets/icon_check.svg';
import CircleSvg from '../assets/icon_circle.svg';

const Home = () => {
  const todos = useStore<ToDos[]>(state => state.todos);

  useEffect(() => {
    
  }, [])

  return (
    <View style={styles.container}>
      {todos.length > 0 ? (
        todos.map((todo) => <ToDo key={todo.id} id={todo.id} text={todo.text}/>)
      ) : (
        <Text style={{textAlign: 'center'}}>할일이 없습니다!</Text>
      )}
    </View>
  );
}

const ToDo = ({id, text}: ToDos) => {
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
    paddingVertical: 25,
    paddingHorizontal: 30,
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
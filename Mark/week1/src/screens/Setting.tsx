import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import palette from "../constants/palette";
import { useStore } from "../store/store";
import AsyncStorage from '@react-native-async-storage/async-storage';

const colors = ['orange', 'green', 'blue', 'purple', 'pink'];

const Setting = () => {
  const { setColor } = useStore();

  const handlePress = async (color: string) => {
    try {
      await AsyncStorage.setItem('color', palette[color]);
      setColor(palette[color]);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Text style={styles.text}>색상을 선택해주세요.</Text>
      <View style={styles.colorContainer}>
        {colors.map((color) => <TouchableOpacity key={color} onPress={() => handlePress(color)} style={[styles.colorChip, {backgroundColor: palette[color]}]}/>)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: palette.black,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  colorContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 28,
    paddingVertical: 16,
  },
  colorChip: {
    width: 30,
    height: 30,
    borderRadius: 100,
  }
})

export default Setting;
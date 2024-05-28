import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useThemeStore} from '@/store/Theme';
import Colors from '@/constants/Colors';

const colors = {
  Orange: Colors.Orange,
  Green: Colors.Green,
  Blue: Colors.Blue,
  Purple: Colors.Purple,
  Pink: Colors.Pink,
};

const Setting = () => {
  // zustand 이용
  const {setColor, loadColor, saveColor} = useThemeStore();

  useEffect(() => {
    loadColor();
  }, [loadColor]);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    saveColor(newColor);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>색상을 선택해주세요.</Text>
      <View style={styles.body}>
        {Object.entries(colors).map(([name, hex]) => (
          <TouchableOpacity
            key={name}
            style={[styles.button, {backgroundColor: hex}]}
            onPress={() => handleColorChange(hex)}
          />
        ))}
      </View>
    </View>
  );
};
export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: Colors.Gray,
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
    paddingVertical: 16,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28,
  },
  button: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});

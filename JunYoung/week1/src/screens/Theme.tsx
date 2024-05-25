import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {useTheme} from '../context/ThemeContext';

const themeColors = ['#FF8F50', '#57BB73', '#5061FF', '#C750FF', '#FF7474'];

const ThemeSelector = () => {
  const {themeColor, setThemeColor} = useTheme();

  return (
    <>
      <Text style={{margin: 20}}>색상을 선택해주세요</Text>
      <View style={styles.container}>
        <View style={styles.colorsContainer}>
          {themeColors.map(color => (
            <TouchableOpacity
              key={color}
              style={[styles.colorButton, {backgroundColor: color}]}
              onPress={() => setThemeColor(color)}
            />
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginBottom: 20,
  },
  colorsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  colorButton: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
});

export default ThemeSelector;

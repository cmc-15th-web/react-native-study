import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {saveThemeColor, THEME_COLORS} from '../stores/Theme';
import {useThemeStore} from '../stores/ThemeStore';

export const Setting: React.FC = () => {
  const {themeColor, setThemeColor} = useThemeStore();

  const saveTheme = async (theme: string) => {
    saveThemeColor(theme);
    setThemeColor(theme);
  };

  const renderThemeColors = () => {
    return THEME_COLORS.map(item => (
      <TouchableOpacity
        key={item.id}
        style={[styles.themeColor, {backgroundColor: item.color}]}
        onPress={() => saveTheme(item.color)}></TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>색상을 선택해주세요.</Text>
      <View style={styles.colorContainer}>{renderThemeColors()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {margin: 20, color: 'black'},
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  themeColor: {
    padding: 15,
    margin: 15,
    borderRadius: 20,
  },
});

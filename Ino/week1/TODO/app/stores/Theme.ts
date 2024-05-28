import AsyncStorage from '@react-native-async-storage/async-storage';

type ThemeColor = {
  id: number;
  color: string;
};

export const THEME_COLORS: ThemeColor[] = [
  {id: 1, color: '#FF8F50'}, // Orange
  {id: 2, color: '#57BB73'}, // Green
  {id: 3, color: '#5061FF'}, // Blue
  {id: 4, color: '#C750FF'}, // Purple
  {id: 5, color: '#FF7474'}, // Pink
];

export const saveThemeColor = async (color: string) => {
  try {
    await AsyncStorage.setItem('selectedThemeColor', color);
  } catch (error) {
    console.error('Error saving theme color:', error);
  }
};

export const loadThemeColor = async () => {
  try {
    const color = await AsyncStorage.getItem('selectedThemeColor');
    return color || '#FF8F50'; // 기본값
  } catch (error) {
    console.error('Error loading theme color:', error);
    return '#FF8F50'; // 에러 발생 시 기본값 반환
  }
};

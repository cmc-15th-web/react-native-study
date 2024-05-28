import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '@/constants/Colors';

interface ThemeState {
  color: string;
  setColor: (color: string) => void;
  loadColor: () => Promise<void>;
  saveColor: (color: string) => Promise<void>;
}

export const useThemeStore = create<ThemeState>(set => ({
  color: Colors.Orange, // default color
  setColor: color => set({color}),
  loadColor: async () => {
    const savedColor = await AsyncStorage.getItem('themeColor');
    if (savedColor) {
      set({color: savedColor});
    }
  },
  saveColor: async color => {
    await AsyncStorage.setItem('themeColor', color);
    set({color});
  },
}));

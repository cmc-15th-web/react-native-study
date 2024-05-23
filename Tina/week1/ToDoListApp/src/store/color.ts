import {create} from 'zustand';
import THEME_COLOR, {ThemeColor} from '@/styles/theme-color';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Theme {
  theme: string;
  setThemeColor: (input: ThemeColor) => void;
}

export const useThemeColor = create<Theme, [['zustand/persist', unknown]]>(
  persist(
    set => ({
      theme: THEME_COLOR.orange,
      setThemeColor: (input: ThemeColor) =>
        set(() => ({
          theme: THEME_COLOR[input],
        })),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

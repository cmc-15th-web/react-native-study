import {create} from 'zustand';
import THEME_COLOR, {ThemeColor} from '../styles/theme-color';

interface Theme {
  theme: string;
  setThemeColor: (input: ThemeColor) => void;
}

export const useThemeColor = create<Theme>(set => ({
  theme: THEME_COLOR.orange,
  setThemeColor: (input: ThemeColor) =>
    set(() => ({
      theme: THEME_COLOR[input],
    })),
}));

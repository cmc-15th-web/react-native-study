import {create} from 'zustand';
import {loadThemeColor} from './Theme';

type ThemeStore = {
  themeColor: string;
  setThemeColor: (color: string) => void;
};

export const useThemeStore = create<ThemeStore>(set => ({
  themeColor: '#FF8F50', // 초기에 빈 문자열로 설정

  // 테마 색상을 로드하고 설정하는 액션
  loadAndSetThemeColor: async () => {
    const color = await loadThemeColor();
    set({themeColor: color});
  },
  setThemeColor: (color: string) => set({themeColor: color}),
}));

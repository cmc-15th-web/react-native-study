import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStore = create(
  persist(
    (set, get) => ({
      color: 'orange',
      setColor: value => set({color: value}),
    }),
    {
      name: 'color-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

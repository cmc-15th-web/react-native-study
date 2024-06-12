import {create} from 'zustand';

interface Store {
  starList: String[];
  setStarList: (list: String[]) => void;
}
export const useStore = create<Store>(set => ({
  starList: [],
  setStarList: (list: String[]) => set({starList: list}),
}));

import { create } from "zustand";

interface Store {
  starList: naver.maps.Marker[];
  starAddressList: string[];
  setStarList: (list: naver.maps.Marker[]) => void;
  setStarAddressList: (list: string[]) => void;
}
export const useStore = create<Store>((set) => ({
  starList: [],
  starAddressList: [],
  setStarList: (list: naver.maps.Marker[]) => set({ starList: list }),
  setStarAddressList: (list: string[]) => set({ starAddressList: list }),
}));

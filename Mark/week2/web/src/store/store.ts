import { create } from "zustand";

interface Store {
  markerList: Marker[];
  starAddressList: Star[];
  setMarkerList: (list: Marker[]) => void;
  setStarAddressList: (list: Star[]) => void;
}
export const useStore = create<Store>((set) => ({
  markerList: [],
  starAddressList: [],
  setMarkerList: (list: Marker[]) => set({ markerList: list }),
  setStarAddressList: (list: Star[]) => set({ starAddressList: list }),
}));

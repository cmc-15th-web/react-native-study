import {create} from 'zustand';

export interface PhotoType {
  id: number;
  image: string;
  date: number;
  dateString: string;
}

interface Store {
  photos: PhotoType[];
  addPhoto: (value: PhotoType) => void;
  updatePhoto: (photos: PhotoType[]) => void;
}

const usePhoto = create<Store>((set, get) => ({
  photos: [],
  addPhoto: value => set({photos: [value, ...get().photos]}),
  updatePhoto: value => set({photos: value}),
}));

export default usePhoto;

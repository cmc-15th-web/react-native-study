import {create} from 'zustand';

interface Photo {
  id: number;
  image: string;
  date: number;
}

interface Store {
  photos: Photo[];
  addPhoto: (value: Photo) => void;
  updatePhoto: (photos: Photo[]) => void;
}

const usePhoto = create<Store>((set, get) => ({
  photos: [],
  addPhoto: value => set({photos: [value, ...get().photos]}),
  updatePhoto: value => set({photos: value}),
}));

export default usePhoto;

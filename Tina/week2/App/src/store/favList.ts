import {create} from 'zustand';

export interface FavProps {
  type: 'address';
  id: number;
  address: string;
  position: {_lat: number; _lng: number; x: number; y: number};
}

export interface FavListStoreProps {
  favList: FavProps[];
  addFavList: (input: FavProps) => void;
  removeFavList: (input: FavProps) => void;
}

export const useFavList = create<FavListStoreProps>(set => ({
  favList: [],
  addFavList: (input: FavProps) =>
    set(state => ({
      favList: [...state.favList, input],
    })),
  removeFavList: (input: FavProps) =>
    set(state => ({
      favList: state.favList.filter(fav => fav.id !== input.id),
    })),
}));

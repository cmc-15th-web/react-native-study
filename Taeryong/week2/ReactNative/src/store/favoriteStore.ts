import {create} from 'zustand';

interface FavoriteStore {
  favorites: string[];
  addFavorite: (address: string) => void;
  removeFavorite: (index: number) => void;
}

export const useFavoriteStore = create<FavoriteStore>(set => ({
  favorites: [],
  addFavorite: (address: string) =>
    set(state => ({
      favorites: [...state.favorites, address],
    })),
  removeFavorite: (index: number) =>
    set(state => ({
      favorites: state.favorites.filter((_, i) => i !== index),
    })),
}));

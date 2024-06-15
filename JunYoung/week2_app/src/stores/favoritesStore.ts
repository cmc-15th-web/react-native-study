import { create } from "zustand";

interface Favorite {
  latitude: number;
  longitude: number;
}

interface FavoritesState {
  favorites: Favorite[];
  addFavorite: (location: Favorite) => void;
  removeFavorite: (index: number) => void;
}

const useFavoritesStore = create<FavoritesState>((set) => ({
  favorites: [],
  addFavorite: (location) =>
    set((state) => ({
      favorites: [...state.favorites, location],
    })),
  removeFavorite: (index) =>
    set((state) => ({
      favorites: state.favorites.filter((_, i) => i !== index),
    })),
}));

export default useFavoritesStore;

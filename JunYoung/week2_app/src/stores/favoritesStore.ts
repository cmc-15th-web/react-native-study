import { create } from "zustand";

interface Favorite {
  latitude: number;
  longitude: number;
}

interface FavoritesState {
  favorites: Favorite[];
  addFavorite: (location: Favorite) => void;
}

const useFavoritesStore = create<FavoritesState>((set) => ({
  favorites: [],
  addFavorite: (location) =>
    set((state) => ({
      favorites: [...state.favorites, location],
    })),
}));

export default useFavoritesStore;

import create from 'zustand';

interface Item {
  latitude: number;
  longitude: number;
  address: string;
}

interface StoreState {
  stars: Item[];
  addItem: (item: Item) => void;
  removeItem: (index: number) => void;
}

export const useStars = create<StoreState>(set => ({
  stars: [],
  addItem: (item: Item) => set(state => ({stars: [...state.stars, item]})),
  removeItem: (index: number) =>
    set(state => ({
      stars: state.stars.filter((_, i) => i !== index),
    })),
}));

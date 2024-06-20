import {create} from 'zustand';

interface UserState {
  name: string;
  setName: (name: string) => void;
}

export const useUserStore = create<UserState>(set => ({
  name: 'CMC',
  setName: name => set({name}),
}));

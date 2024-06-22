import {create} from 'zustand';

interface store {
  images: UploadedImage[];
  addImages: (newImage: UploadedImage) => void;
}
export const useStore = create<store>(set => ({
  images: [],
  addImages: (newImage: UploadedImage) =>
    set(state => ({
      images: [...state.images, newImage],
    })),
}));

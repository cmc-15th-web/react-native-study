import {create} from 'zustand';
import {ImageStore} from '@/types/type';

const useImageStore = create<ImageStore>(set => ({
  images: [],
  addImages: newImages =>
    set(state => ({images: [...state.images, ...newImages]})),
}));

export default useImageStore;

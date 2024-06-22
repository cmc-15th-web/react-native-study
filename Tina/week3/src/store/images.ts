import {create} from 'zustand';

export interface ImageProps {
  imgUrls: string;
  date: string;
  timestamp: string;
}

interface ImageStoreProps {
  imgList: ImageProps[];
  setImgList: (input: ImageProps) => void;
}

export const useImages = create<ImageStoreProps>(set => ({
  imgList: [],
  setImgList: (input: ImageProps) =>
    set(state => ({imgList: [...state.imgList, input]})),
}));

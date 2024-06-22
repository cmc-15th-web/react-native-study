import {create} from 'zustand';

type ImageDataType = {
  id: string;
  path: string; // 여기서 image는 선택한 이미지 데이터입니다. 필요에 따라 타입을 조정하세요.
  date: Date;
};

type ImageState = {
  images: ImageDataType[];
  addImage: (image: any) => void;
  selectedImage: ImageDataType | null;
  selectImage: (image: ImageDataType) => void;
};

export const useImageStore = create<ImageState>(set => ({
  images: [],
  addImage: image => {
    console.log(image.path);
    const newImage: ImageDataType = {
      id: Math.random().toString(), // 임의의 고유 ID 생성
      path: image.path,
      date: new Date(), // 현재 날짜로 설정
    };
    set(state => ({
      images: [...state.images, newImage],
    }));
  },
  selectedImage: null,
  selectImage: image => {
    set({selectedImage: image});
  },
}));

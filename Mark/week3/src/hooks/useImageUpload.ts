import ImagePicker from 'react-native-image-crop-picker';
import { useStore } from '../store/store';

// 이미지 업로드를 위해 useStore를 호출할 함수를 반환하는 훅
export const useImageUpload = () => {
  const addImages = useStore((state) => state.addImages);

  const uploadByCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 300,
        cropping: true,
      });
      if (image) {
        addImages({
          path: image.path,
          modificationDate: image.modificationDate!,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const uploadByGallery = async () => {
    try {
      const imageList = await ImagePicker.openPicker({
        multiple: true,
        cropping: false,
        mediaType: 'photo',
      });

      // 배열의 각 요소마다 비동기작업을 하기 위해 for...of 사용
      for (const image of imageList) {
        try {
          const cropped = await ImagePicker.openCropper({
            path: image.path,
            width: 300,
            height: 300,
            mediaType: 'photo',
          });
          if (cropped) {
            addImages({
              path: cropped.path,
              modificationDate: cropped.modificationDate!,
            });
          }
        } catch (cropError) {
          console.error('Error cropping image: ', cropError);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { uploadByCamera, uploadByGallery };
};

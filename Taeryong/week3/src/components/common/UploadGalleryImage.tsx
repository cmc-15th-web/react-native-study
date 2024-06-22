import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';
import useImageStore from '@/store/imageStore';
import {ImageData} from '@/types/type';

const UploadGalleryImage = () => {
  const addImages = useImageStore(state => state.addImages);

  const uploadByGallery = async () => {
    try {
      const selectedImages = await ImagePicker.openPicker({
        multiple: true,
        crop: true,
        mediaType: 'photo',
      });
      if (selectedImages.length > 0) {
        await openCrop(selectedImages);
      }
    } catch (e) {
      console.log('Error selecting images:', e);
    }
  };

  const openCrop = async (selectedImages: ImageOrVideo[]) => {
    const croppedImages: ImageData[] = [];

    for (const image of selectedImages) {
      try {
        const croppedImage = await ImagePicker.openCropper({
          path: image.path,
          width: 900,
          height: 900,
          mediaType: 'photo',
        });

        croppedImages.push({
          creationDate: new Date(),
          path: croppedImage.path,
        });
      } catch (err) {
        console.log('Error cropping image:', err);
        return;
      }
    }
    // 모든 이미지가 성공적으로 크롭되었을 경우에만, Zustand 스토어에 추가
    if (croppedImages.length === selectedImages.length) {
      addImages(croppedImages);
    }
  };

  return {uploadByGallery};
};

export default UploadGalleryImage;

import ImagePicker from 'react-native-image-crop-picker';
import {ImageData, CameraImageCropProps} from '@/types/type';
import useImageStore from '@/store/imageStore';

const CameraImageCrop = async ({
  imagePath,
  onCropComplete,
}: CameraImageCropProps) => {
  const addImages = useImageStore.getState().addImages;

  try {
    const croppedImage = await ImagePicker.openCropper({
      path: imagePath,
      width: 900,
      height: 900,
      mediaType: 'photo',
    });

    const croppedImages: ImageData[] = [
      {
        creationDate: new Date(),
        path: croppedImage.path,
      },
    ];

    addImages(croppedImages);
    onCropComplete();
  } catch (error) {
    console.error('Failed to crop image:', error);
  }
};

export default CameraImageCrop;

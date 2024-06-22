import ImagePicker from 'react-native-image-crop-picker';

export const chooseImage = (): Promise<any | null> => {
  return new Promise((resolve, reject) => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        if (image) {
          console.log('Selected image:', image);
          resolve(image);
        } else {
          reject(new Error('No image selected'));
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const openCamera = (): Promise<any | null> => {
  return new Promise((resolve, reject) => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then(image => {
        if (image) {
          console.log('Selected image:', image);
          resolve(image);
        } else {
          reject(new Error('No image selected'));
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

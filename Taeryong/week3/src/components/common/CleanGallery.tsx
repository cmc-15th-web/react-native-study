import {Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const CleanGallery = () => {
  ImagePicker.clean()
    .then(() => {
      console.log('캐시에 있는 모든 이미지 삭제 완료');
    })
    .catch(e => {
      console.log('error', e);
      Alert.alert('캐시 삭제에 실패했습니다.');
    });
};

export default CleanGallery;

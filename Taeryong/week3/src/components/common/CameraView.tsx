import {useEffect, useRef} from 'react';
import {View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {
  Camera,
  getCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import ArrowBackCameraIcon from '@/assets/icons/ArrowBackCamera.svg';
import CameraButtonIcon from '@/assets/icons/CameraButton.svg';
import CameraImageCrop from './CameraImageCrop';

const CameraView = ({onClose}: {onClose: () => void}) => {
  const {hasPermission} = useCameraPermission();
  const camera = useRef<Camera>(null);

  const devices = Camera.getAvailableCameraDevices();
  const device = getCameraDevice(devices, 'back');

  //비동기 처리
  useEffect(() => {
    if (!hasPermission) {
      Alert.alert(
        'Permissions required',
        'Camera and album permissions are required to use this feature.',
      );
      onClose();
    }
    if (!device) {
      Alert.alert('No camera device found.');
      onClose();
    }
  }, [hasPermission, device]);

  // divice가 null이면 return
  if (!device) {
    return null;
  }

  // 사진 촬영 + 이미지 자르기
  const handleTakePhoto = async () => {
    if (!camera.current) return;
    const photo = await camera.current.takePhoto();
    await CameraImageCrop({imagePath: photo.path!, onCropComplete: onClose});
  };

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device!}
        isActive={true}
        ref={camera}
        photo={true}
      />
      <TouchableOpacity onPress={onClose} style={styles.backButton}>
        <ArrowBackCameraIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTakePhoto} style={styles.CameraButton}>
        <CameraButtonIcon />
      </TouchableOpacity>
    </View>
  );
};

export default CameraView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 80,
    left: 20,
  },
  CameraButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
  },
});

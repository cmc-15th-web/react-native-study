import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Alert, Linking} from 'react-native';

const CameraPermissionAlert = () =>
  Alert.alert('카메라 권한을 허용해주세요', '', [
    {
      text: '취소',
      onPress: () => console.log('Cancel'),
      style: 'cancel',
    },
    {text: '설정으로 이동', onPress: () => Linking.openSettings()},
  ]);

const LibraryPermissionAlert = () =>
  Alert.alert('갤러리 권한을 허용해주세요', '', [
    {
      text: '취소',
      onPress: () => console.log('Cancel'),
      style: 'cancel',
    },
    {text: '설정으로 이동', onPress: () => Linking.openSettings()},
  ]);

export function cameraPermission() {
  check(PERMISSIONS.IOS.CAMERA)
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          //   CameraPermissionAlert();
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          //   CameraPermissionAlert();
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          break;
        case RESULTS.LIMITED:
          //   CameraPermissionAlert();
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          //   CameraPermissionAlert();
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    })
    .catch(error => {
      console.error(error);
    });
}

export function libraryPermission() {
  check(PERMISSIONS.IOS.PHOTO_LIBRARY)
    .then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          //   LibraryPermissionAlert();
          console.log(
            'This feature is not available (on this device / in this context)',
          );
          break;
        case RESULTS.DENIED:
          //   LibraryPermissionAlert();
          console.log(
            'The permission has not been requested / is denied but requestable',
          );
          break;
        case RESULTS.LIMITED:
          //   LibraryPermissionAlert();
          console.log('The permission is limited: some actions are possible');
          break;
        case RESULTS.GRANTED:
          console.log('The permission is granted');
          break;
        case RESULTS.BLOCKED:
          //   LibraryPermissionAlert();
          console.log('The permission is denied and not requestable anymore');
          break;
      }
    })
    .catch(error => {
      console.error(error);
    });
}

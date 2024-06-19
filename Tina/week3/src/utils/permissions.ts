import {Alert, Platform} from 'react-native';
import {
  PERMISSIONS,
  RESULTS,
  check,
  request,
  Permission,
} from 'react-native-permissions';

export const checkPermission = async (permission: Permission) => {
  if (Platform.OS === 'ios') {
    await check(permission).then(async result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          Alert.alert('RESULTS.UNAVAILABLE');
          break;
        case RESULTS.DENIED:
          await requestPermission(permission);
          break;
        case RESULTS.LIMITED:
          Alert.alert('RESULTS.LIMITE');
          break;
        case RESULTS.GRANTED:
          await requestPermission(permission);
          break;
        case RESULTS.BLOCKED:
          Alert.alert('RESULTS.BLOCKED');
          break;
      }
    });
  }
};

export const requestPermission = async (permission: Permission) => {
  await request(permission).then(result => {
    if (result !== RESULTS.GRANTED) {
      Alert.alert('!RESULTS.GRANTED');
    }
  });
};

export const checkAllPermissions = async () => {
  [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.PHOTO_LIBRARY].forEach(
    async currPermission => {
      await checkPermission(currPermission);
    },
  );
};

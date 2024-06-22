import React, {useEffect, useState} from 'react';
import {Alert, Platform, StyleSheet, Text} from 'react-native';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './Navigator';

function Permission(): React.JSX.Element {
  const [permission, setpermission] = useState(false);

  useEffect(() => {
    const platformPermissions =
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.CAMERA &&
          PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE &&
          PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
        : PERMISSIONS.IOS.CAMERA;
    const requestCameraPermission = async () => {
      try {
        const result = await request(platformPermissions);
        result === RESULTS.GRANTED
          ? setpermission(true)
          : Alert.alert('카메라 및 갤러리 권한을 허용해주세요');
      } catch (err) {
        Alert.alert('카메라 및 갤러리 권한이 없습니다.');
        console.warn(err);
      }
    };
    requestCameraPermission();
  });

  return (
    <Text>카메라 및 갤러리 권한 :{permission ? '권한있음' : '권한 없음'}</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Permission;

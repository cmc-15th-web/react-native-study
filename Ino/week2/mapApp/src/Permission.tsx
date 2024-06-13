import React, {useEffect, useState} from 'react';
import {
  Alert,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';

function Permission(): React.JSX.Element {
  const [havePermission, setHavePermission] = useState(false);

  useEffect(() => {
    // 최초 권한 확인 및 설정
    const platformPermissions =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    const requestCameraPermission = async () => {
      try {
        const result = await request(platformPermissions);
        result === RESULTS.GRANTED
          ? setHavePermission(true)
          : Alert.alert('위치 권한을 허용해주세요');
      } catch (err) {
        Alert.alert('위치 권한 없음');
        console.warn(err);
      }
    };
    requestCameraPermission();
  });

  return <Text>위치권한 : {havePermission ? '있음' : '없음'}</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Permission;

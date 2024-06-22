import React, {useEffect, useState} from 'react';
import {View, Alert, Pressable, Text} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {RootStackParamList} from './Props';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Colors from '@src/Colors';

const PermissionScreen = () => {
  const [cameraPermissionStatus, setCameraPermissionStatus] = useState('');
  const [photoPermissionStatus, setPhotoPermissionStatus] = useState('');

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  useEffect(() => {
    // 권한 상태를 확인
    checkPermissions();
  }, []);

  useEffect(() => {
    // 권한이 모두 있으면 홈 화면으로 이동.
    console.log(cameraPermissionStatus, photoPermissionStatus);
    if (
      cameraPermissionStatus === RESULTS.GRANTED &&
      photoPermissionStatus === RESULTS.GRANTED
    ) {
      goToHomeScreen();
    }
  }, [cameraPermissionStatus, photoPermissionStatus]);

  const checkPermissions = async () => {
    const cameraStatus = await check(PERMISSIONS.ANDROID.CAMERA);
    const photoStatus = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);

    setCameraPermissionStatus(cameraStatus);
    setPhotoPermissionStatus(photoStatus);
  };

  const requestCameraPermission = async () => {
    const result = await request(PERMISSIONS.ANDROID.CAMERA);

    if (result === RESULTS.GRANTED) {
      setCameraPermissionStatus(RESULTS.GRANTED);
    } else {
      Alert.alert(
        'Permission required',
        'Please grant camera permission to use this feature.',
      );
    }
  };

  const requestPhotoPermission = async () => {
    const result = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);

    if (result === RESULTS.GRANTED) {
      setPhotoPermissionStatus(RESULTS.GRANTED);
    } else {
      Alert.alert(
        'Permission required',
        'Please grant photo library permission to use this feature.',
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Gray900,
      }}>
      <Pressable
        onPress={requestCameraPermission}
        disabled={cameraPermissionStatus === RESULTS.GRANTED}>
        <View
          style={{
            backgroundColor: Colors.White,
            paddingHorizontal: 40,
            paddingVertical: 20,
            borderRadius: 45,
          }}>
          <Text>카메라 권한</Text>
        </View>
      </Pressable>
      <Pressable
        onPress={requestPhotoPermission}
        disabled={photoPermissionStatus === RESULTS.GRANTED}
        style={{marginTop: 20}}>
        <View
          style={{
            backgroundColor: Colors.White,
            paddingHorizontal: 40,
            paddingVertical: 20,
            borderRadius: 45,
          }}>
          <Text>사진 권한</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default PermissionScreen;

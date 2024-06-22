/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import CustumAlert from '@/utils/CustumAlert';

const useCameraAndAlbumPermissions = () => {
  const [hasPermissions, setHasPermissions] = useState<{
    camera: boolean | null;
    album: boolean | null;
  }>({camera: null, album: null});

  useEffect(() => {
    checkPermissions();
  }, []);

  const checkPermissions = async () => {
    await checkCameraPermission();
    await checkAlbumPermission();
  };

  const checkCameraPermission = async () => {
    const permission = PERMISSIONS.IOS.CAMERA;
    const result = await check(permission);

    switch (result) {
      case RESULTS.UNAVAILABLE:
        Alert.alert('Camera is not available on this device.');
        setHasPermissions(prevState => ({...prevState, camera: false}));
        break;
      case RESULTS.DENIED:
        requestCameraPermission();
        break;
      case RESULTS.GRANTED:
        setHasPermissions(prevState => ({...prevState, camera: true}));
        break;
      case RESULTS.BLOCKED:
        CustumAlert(
          'Camera permission is blocked',
          'Please enable camera permission in settings.',
        );
        setHasPermissions(prevState => ({...prevState, camera: false}));
        break;
      default:
        setHasPermissions(prevState => ({...prevState, camera: false}));
        break;
    }
  };

  const requestCameraPermission = async () => {
    const permission = PERMISSIONS.IOS.CAMERA;
    const result = await request(permission);

    if (result === RESULTS.GRANTED) {
      setHasPermissions(prevState => ({...prevState, camera: true}));
    } else {
      CustumAlert(
        'Camera permission denied',
        'Please enable camera permission in settings.',
      );
      setHasPermissions(prevState => ({...prevState, camera: false}));
    }
  };

  const checkAlbumPermission = async () => {
    const permission = PERMISSIONS.IOS.PHOTO_LIBRARY;
    const result = await check(permission);

    switch (result) {
      case RESULTS.UNAVAILABLE:
        Alert.alert('Photo library is not available on this device.');
        setHasPermissions(prevState => ({...prevState, album: false}));
        break;
      case RESULTS.DENIED:
        requestAlbumPermission();
        break;
      case RESULTS.GRANTED:
        setHasPermissions(prevState => ({...prevState, album: true}));
        break;
      case RESULTS.BLOCKED:
        CustumAlert(
          'Photo library permission is blocked',
          'Please enable photo library permission in settings.',
        );
        setHasPermissions(prevState => ({...prevState, album: false}));
        break;
      default:
        setHasPermissions(prevState => ({...prevState, album: false}));
        break;
    }
  };

  const requestAlbumPermission = async () => {
    const permission = PERMISSIONS.IOS.PHOTO_LIBRARY;
    const result = await request(permission);

    if (result === RESULTS.GRANTED) {
      setHasPermissions(prevState => ({...prevState, album: true}));
    } else {
      CustumAlert(
        'Photo library permission denied',
        'Please enable photo library permission in settings.',
      );
      setHasPermissions(prevState => ({...prevState, album: false}));
    }
  };

  return hasPermissions;
};

export default useCameraAndAlbumPermissions;

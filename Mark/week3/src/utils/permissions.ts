import { Platform } from "react-native";
import { PERMISSIONS, RESULTS, check, request } from "react-native-permissions";

export const checkPermissions = async () => {
  try {
    const cameraStatus = await check(Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA);
    const galleryStatus = await check(Platform.OS === "ios" ? PERMISSIONS.IOS.PHOTO_LIBRARY: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);

    if (cameraStatus !== RESULTS.GRANTED) {
      await requestCameraPermission();
    }

    if (galleryStatus !== RESULTS.GRANTED) {
      await requestGalleryPermission();
    }
  } catch(err) {
    console.log(err);
  }
};

const requestCameraPermission = async () => {
try {
    const result = await request(Platform.OS === "ios" ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA);
  } catch (error) {
    console.error('Error requesting camera permission: ', error);
  }
};

const requestGalleryPermission = async () => {
  try {
    const result = await request(Platform.OS === "ios" ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
  } catch (error) {
    console.error('Error requesting gallery permission: ', error);
  }
};
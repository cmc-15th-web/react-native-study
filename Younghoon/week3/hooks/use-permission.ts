import { useEffect, useState, useCallback } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

export function usePermission() {
  const [hasCameraPermission, setHasCameraPermission] = useState<
    boolean | null
  >(null);
  const [hasGalleryPermission, setHasGalleryPermission] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const requestGalleryPermission = useCallback(async () => {
    const galleryStatus =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    setHasGalleryPermission(galleryStatus.status === "granted");
    if (galleryStatus.status !== "granted") {
      Alert.alert("갤러리 권한이 필요합니다.");
    }
  }, []);

  const requestCameraPermission = useCallback(async () => {
    const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
    setHasCameraPermission(cameraStatus.status === "granted");
    if (cameraStatus.status !== "granted") {
      Alert.alert("카메라 권한이 필요합니다.");
    }
  }, []);

  const onGallery = useCallback(async () => {
    if (hasGalleryPermission === false) {
      Alert.alert("갤러리 권한이 존재하지 않습니다.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
    }
  }, [hasGalleryPermission]);

  const onCamera = useCallback(async () => {
    if (hasCameraPermission === false) {
      Alert.alert("카메라 권한이 존재하지 않습니다.");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
    }
  }, [hasCameraPermission]);

  return {
    requestGalleryPermission,
    requestCameraPermission,
    onGallery,
    onCamera,
  };
}

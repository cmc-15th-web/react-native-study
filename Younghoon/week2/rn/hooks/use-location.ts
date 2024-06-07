import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";

export const useLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  // 권한 받아오기
  useEffect(() => {
    const getLocationPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("위치 권한이 거부되었습니다.");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    };

    getLocationPermission();
  }, []);

  return { location };
};

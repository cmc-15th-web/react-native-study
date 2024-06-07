import { useEffect, useState } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { Alert } from "react-native";

export const useLocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  // 권한 받아오기
  useEffect(() => {
    async () => {
      const { status } = await Permissions.askAsync(
        Permissions.LOCATION_FOREGROUND
      );
      if (status !== "granted") {
        Alert.alert("위치 권한이 거부되었습니다.");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    };
  }, []);

  return { location };
};

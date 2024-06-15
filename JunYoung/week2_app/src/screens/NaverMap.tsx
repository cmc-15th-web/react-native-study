import React, { useState, useRef } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";
import * as Location from "expo-location";
import LocationButton from "../components/LocationButton";
import FavoriteButton from "../components/FavoriteButton";
import useFavoritesStore from "../stores/favoritesStore"; // zustand 스토어를 가져옵니다.

interface Coordinate {
  latitude: number;
  longitude: number;
}

const NaverMap: React.FC = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  ); // 위치 정보를 저장할 상태를 생성
  const [markerPosition, setMarkerPosition] = useState<Coordinate | null>(null); // 마커 위치 상태 추가
  const webViewRef = useRef<WebView>(null);
  const addFavorite = useFavoritesStore((state) => state.addFavorite); // zustand에서 즐겨찾기 추가 함수 가져오기

  // 위치 권한을 요청하고 현재 위치를 가져오는 함수
  const handleLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync(); // 위치 권한을 요청
    if (status !== "granted") {
      // 권한이 부여되지 않으면 경고 창을 표시
      Alert.alert("위치 권한이 부여되지 않았습니다!");
      return;
    }

    // 권한이 부여되면 현재 위치를 가져옴
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location); // 위치 정보를 상태에 저장
  };

  const handleMessage = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    if (data.type === "click") {
      setMarkerPosition({ latitude: data.latitude, longitude: data.longitude }); // 마커 위치 상태 업데이트
    }
  };

  // 즐겨찾기 추가 함수
  const addToFavorites = () => {
    if (markerPosition) {
      addFavorite(markerPosition); // zustand 스토어에 즐겨찾기 위치 추가
      // WebView에 즐겨찾기 마커 추가 요청
      webViewRef.current?.injectJavaScript(`
        addFavoriteMarker(${markerPosition.latitude}, ${markerPosition.longitude});
      `);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.webviewContainer}>
        <WebView
          ref={webViewRef}
          originWhitelist={["*"]}
          source={{ uri: "http://192.168.200.167:3000/naverMap" }} // WebView에서 로드할 URL을 설정
          onMessage={handleMessage} // 웹 페이지로부터 메시지를 받음
        />
        <LocationButton onPress={handleLocationPermission} />
      </View>
      <FavoriteButton onPress={addToFavorites} />
    </View>
  );
};

// 스타일 설정을 정의
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webviewContainer: {
    flex: 1,
  },
});

export default NaverMap; // NaverMap 컴포넌트를 기본 내보내기로 설정

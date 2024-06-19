import Geolocation from '@react-native-community/geolocation';
import {WebView, WebViewMessageEvent} from 'react-native-webview';

interface Position {
  latitude: string;
  longitude: string;
}
interface Item {
  latitude: number;
  longitude: number;
  address: string;
}

// 현재 위치 가져오기
export const getCurrentPosition = (): Promise<Position> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        if (position && position.coords) {
          const lat = position.coords.latitude.toString();
          const long = position.coords.longitude.toString();
          resolve({latitude: lat, longitude: long});
        } else {
          reject(new Error('Position or position.coords is undefined'));
        }
      },
      err => {
        reject(err);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });
};

// 위치 WebView에 전달
export const updateCurrentPosition = (
  latitude: string,
  longitude: string,
  webRef: React.RefObject<WebView>,
) => {
  // Webview로 전송
  const message = JSON.stringify({
    name: 'CurrentLocation',
    latitude: latitude,
    longitude: longitude,
  });
  webRef.current?.postMessage(message);
};

// 즐겨찾기 리스트 전송
export const showStarList = (
  visible: boolean,
  list: Item[],
  webRef: React.RefObject<WebView>,
) => {
  // Webview로 전송
  const message = JSON.stringify({
    name: 'ShowStarList',
    visible: visible,
    list: list,
  });
  webRef.current?.postMessage(message);
};

import {Alert, Platform} from 'react-native';
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import WebView from 'react-native-webview';

export const checkPermission = (currentRef: React.RefObject<WebView>) => {
  if (Platform.OS === 'ios') {
    check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          Alert.alert('RESULTS.UNAVAILABLE');
          break;
        case RESULTS.DENIED:
          requestPermission(currentRef);
          break;
        case RESULTS.LIMITED:
          Alert.alert('RESULTS.LIMITE');
          break;
        case RESULTS.GRANTED:
          getCurrentLocation(currentRef);
          break;
        case RESULTS.BLOCKED:
          Alert.alert('RESULTS.BLOCKED');
          break;
      }
    });
  }
};

export const requestPermission = (currentRef: React.RefObject<WebView>) => {
  request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {
    if (result === RESULTS.GRANTED) {
      getCurrentLocation(currentRef);
    } else {
      Alert.alert('!RESULTS.GRANTED');
    }
  });
};

export const getCurrentLocation = (currentRef: React.RefObject<WebView>) => {
  Geolocation.getCurrentPosition(
    position => {
      if (currentRef.current) {
        currentRef.current.postMessage(
          JSON.stringify({
            type: 'location',
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        );
      }
    },
    error => {
      Alert.alert('getCurrentLocation', error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 1000},
  );
};

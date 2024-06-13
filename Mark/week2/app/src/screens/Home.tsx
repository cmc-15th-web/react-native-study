import {Alert, Platform, StyleSheet, View} from 'react-native';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import {useEffect, useRef} from 'react';
import reactotron from 'reactotron-react-native';
import {PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import {useStore} from '../store/store';

const Home = () => {
  const {setStarList, setWebViewRef} = useStore();
  const webViewRef = useRef<WebView>(null);
  const localServerURL =
    Platform.OS === 'android'
      ? 'http://10.0.2.2:3000'
      : 'http://localhost:3000';

  const requestLocationPermission = async () => {
    let result;
    if (Platform.OS === 'android') {
      result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else if (Platform.OS === 'ios') {
      result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }

    if (result === RESULTS.GRANTED) {
      const watchId = Geolocation.watchPosition(
        position => {
          const {coords} = position;
          const message = {
            type: 'location',
            payload: {
              latitude: coords.latitude,
              longitude: coords.longitude,
            },
          };
          if (webViewRef.current) {
            webViewRef.current.postMessage(JSON.stringify(message));
          }
        },
        error => {
          console.log(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
      return watchId;
    } else {
      Alert.alert(
        'Location Permission Required',
        'This app needs location permission to provide the best experience. Please grant location access.',
        [
          {
            text: 'OK',
            onPress: () => requestLocationPermission(),
          },
        ],
      );
    }
  };

  useEffect(() => {
    setWebViewRef(webViewRef);
  }, [webViewRef]);

  useEffect(() => {
    const watchId = requestLocationPermission();

    return () => {
      if (typeof watchId === 'number') {
        Geolocation.clearWatch(watchId);
      }
    };
  }, []);

  const handleMessage = (e: WebViewMessageEvent) => {
    try {
      const data = JSON.parse(e.nativeEvent.data);
      if (data.type === 'star') {
        setStarList(data.payload.starAddressList);
      }
    } catch (err) {
      reactotron.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        style={styles.webview}
        source={{uri: localServerURL}}
        javaScriptEnabled={true}
        onMessage={handleMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default Home;

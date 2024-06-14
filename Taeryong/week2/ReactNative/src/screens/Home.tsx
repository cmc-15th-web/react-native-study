import React, {useRef, useEffect, useState, useCallback} from 'react';
import {Alert, SafeAreaView, StyleSheet} from 'react-native';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import UseLocation from '@/utiles/UseLocation';
import UseLoading from '@/utiles/UseLoading';
import {useFavoriteStore} from '@/store/favoriteStore';

const App = () => {
  const webViewRef = useRef<WebView>(null);
  const location = UseLocation();
  const [isLoading, setIsLoading] = useState(true);
  const addFavorite = useFavoriteStore(state => state.addFavorite);

  const getMessage = (event: WebViewMessageEvent) => {
    const data = JSON.parse(event.nativeEvent.data);
    if (data.address) {
      addFavorite(data.address);
      Alert.alert('즐겨찾기 추가', `주소: ${data.address}`);
    }
  };

  const sendLocationToWeb = useCallback(() => {
    if (webViewRef.current && location) {
      const message = JSON.stringify({
        type: 'location',
        latitude: location.latitude,
        longitude: location.longitude,
      });
      webViewRef.current.postMessage(message);
    }
  }, [location]);

  useEffect(() => {
    if (location != null) {
      setIsLoading(false);
      setTimeout(sendLocationToWeb, 1000);
    }
  }, [location, sendLocationToWeb]);

  if (isLoading) {
    UseLoading;
  }

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{uri: 'http://localhost:5173'}}
        ref={webViewRef}
        javaScriptEnabled={true}
        geolocationEnabled={true}
        onMessage={getMessage}
        onLoadEnd={sendLocationToWeb}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

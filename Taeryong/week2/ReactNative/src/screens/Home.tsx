import React, {useRef} from 'react';
import {Alert, Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import {API_URL_THIRD} from '@env';
import UseLocation from '@/utiles/UseLocation';

const {width, height} = Dimensions.get('screen');

const App = () => {
  const location = UseLocation();
  console.log('🚀 ~ file: home.tsx:11 ~ App ~ location:', location);

  console.log('🚀 ~ file: home.tsx:5 ~ API_URL:', API_URL_THIRD);
  const webViewRef = useRef<WebView>(null);

  const getMessage = (event: WebViewMessageEvent) => {
    Alert.alert(event.nativeEvent.data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{uri: API_URL_THIRD}}
        ref={webViewRef}
        javaScriptEnabled={true}
        geolocationEnabled={true}
        onMessage={getMessage}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  webViewContainer: {
    flex: 1,
    width: width,
    height: height,
  },
});

export default App;

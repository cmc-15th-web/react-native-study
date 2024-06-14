import {checkPermission} from '@/utils/map';
import React, {useRef} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const WebViewScreen = () => {
  const webViewRef = useRef<WebView>(null);

  const handleOnMessage = () => {};

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        onMessage={handleOnMessage}
        onLoadEnd={() => checkPermission(webViewRef)}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{
          uri: 'http://localhost:3000',
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeareaContainer: {
    width: deviceWidth,
    height: deviceHeight,
  },
});

export default WebViewScreen;

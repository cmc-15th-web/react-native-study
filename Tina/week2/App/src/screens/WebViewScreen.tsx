import {checkPermission} from '@/utils/map';
import React, {useEffect, useRef} from 'react';
import {Alert, Dimensions, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WebView, {WebViewMessageEvent} from 'react-native-webview';
import {useFavList} from '@/store/favList';
import {useWebviewRef} from '@/store/webviewRef';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const WebViewScreen = () => {
  const webViewRef = useRef<WebView>(null);
  const {addFavList} = useFavList();
  const {initWebview} = useWebviewRef();

  const handleOnMessage = (e: WebViewMessageEvent) => {
    try {
      const data = JSON.parse(e.nativeEvent.data);
      if (data.type === 'address') {
        Alert.alert(data.address);
        addFavList(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const unsubscribe = useFavList.subscribe(state =>
      webViewRef.current?.postMessage(
        JSON.stringify({
          type: 'favList',
          favList: state.favList,
        }),
      ),
    );
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <WebView
        ref={webViewRef}
        originWhitelist={['*']}
        onMessage={handleOnMessage}
        onLoadEnd={() => {
          checkPermission(webViewRef);
          initWebview(webViewRef);
        }}
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

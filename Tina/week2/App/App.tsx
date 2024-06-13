import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <WebView
        style={styles.webviewContainer}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{
          uri: 'http://localhost:3000',
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
  webviewContainer: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
});

export default App;

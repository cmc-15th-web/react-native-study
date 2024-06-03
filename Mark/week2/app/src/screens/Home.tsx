import {Platform, StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

const Home = () => {
  const localServerURL =
    Platform.OS === 'android'
      ? 'http://10.0.2.2:3000'
      : 'https://naver.com';

  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        source={{uri: localServerURL}}
        originWhitelist={['http://*', 'https://*', 'intent://*']}
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

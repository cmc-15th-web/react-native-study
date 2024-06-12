import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {API_URL} from '@env';

const App = () => {
  console.log('🚀 ~ file: home.tsx:5 ~ API_URL:', API_URL);
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: API_URL}} style={styles.container} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

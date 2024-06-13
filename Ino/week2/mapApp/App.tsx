import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import MyWeb from './src/WebView';
import Permission from './src/Permission';
import Map from './src/MapPage';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <MyWeb />
      {/* <Permission /> */}
      {/* <Map /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;

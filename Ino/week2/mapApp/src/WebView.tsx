import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class MyWeb extends Component {
  render() {
    return (
      <WebView
        style={styles.webview}
        source={{ uri: 'https://www.google.com/' }}
        // style={{ marginTop: 20 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
});

export default MyWeb;
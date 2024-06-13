import Geolocation from '@react-native-community/geolocation';
import React, {Component, useEffect, useRef} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const MyWeb = () => {
  let webRef = useRef<WebView | null>(null);

  useEffect(() => {
    // 현재위치 받아오기
    Geolocation.getCurrentPosition(
      position => {
        const lat = JSON.stringify(position.coords.latitude);
        const long = JSON.stringify(position.coords.longitude);

        // Webview로 전송
        const message = JSON.stringify({
          name: 'CurrentLocation',
          latitude: lat,
          longitude: long,
        });
        // console.log(message);
        webRef.current?.postMessage(message);
      },
      err => {
        console.log(err.code, err.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  const sendMessage = () => {
    console.log(webRef.current?.postMessage('Hello! native to react 전송중'));
  };

  return (
    <WebView
      ref={webRef}
      style={styles.webview}
      source={{uri: 'http://192.168.0.12:5173/'}}
    />
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
});

export default MyWeb;

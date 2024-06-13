import Geolocation from '@react-native-community/geolocation';
import React, {Component, useEffect, useRef, useState} from 'react';
import {Alert, Dimensions, Pressable, StyleSheet} from 'react-native';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import LocationIcon from '../assets/Location';
import Colors from '../Colors';
import {useStars} from '../store/star';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

interface StarItem {
  name: string;
  latitude: number;
  longitude: number;
  address: string;
}

const MyWeb = () => {
  let webRef = useRef<WebView | null>(null);
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');

  const {addItem} = useStars();

  const getCurrent = () => {
    // 현재위치 받아오기
    Geolocation.getCurrentPosition(
      position => {
        const lat = JSON.stringify(position.coords.latitude);
        const long = JSON.stringify(position.coords.longitude);
        setLatitude(lat);
        setLongitude(long);

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
  };

  // 현재 위치로 이동
  const updateCurrentPosition = () => {
    // Webview로 전송
    const message = JSON.stringify({
      name: 'CurrentLocation',
      latitude: latitude,
      longitude: longitude,
    });
    webRef.current?.postMessage(message);
  };

  // 첫 로딩시 현재위치 받아오기.
  useEffect(() => {
    getCurrent();
  }, []);

  // Web -> WebView
  const handleMessage = (e: WebViewMessageEvent) => {
    console.log(e.nativeEvent.data);
    const data = JSON.parse(e.nativeEvent.data);

    if (data.name === 'AddStar') handleAddStar(data);
  };

  // 즐겨찾기에 추가
  const handleAddStar = (data: StarItem) => {
    addItem({
      latitude: data.latitude,
      longitude: data.longitude,
      address: data.address,
    });
  };

  return (
    <>
      <WebView
        ref={webRef}
        style={styles.webview}
        source={{uri: 'http://192.168.0.12:5173/'}}
        onMessage={event => handleMessage(event)}
      />
      <Pressable onPress={updateCurrentPosition} style={styles.current}>
        <LocationIcon color={Colors.Blue600} size={24} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
  current: {
    zIndex: 2,
    backgroundColor: Colors.White,
    padding: 10,
    borderRadius: 100,
    position: 'absolute',
    alignContent: 'center',
    left: 17,
    bottom: 10,
  },
});

export default MyWeb;

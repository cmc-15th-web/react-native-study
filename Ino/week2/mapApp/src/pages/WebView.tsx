import Geolocation from '@react-native-community/geolocation';
import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, Pressable, StyleSheet} from 'react-native';
import {WebView, WebViewMessageEvent} from 'react-native-webview';
import LocationIcon from '../assets/Location';
import Colors from '../Colors';
import {useStarsState} from '../store/star';
import ShowStarBtn from '../component/ShowStarList';
import {
  getCurrentPosition,
  updateCurrentPosition,
} from '../utils/webViewBridge';

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

  const {addItem} = useStarsState();

  // 첫 로딩시 현재위치 받아오기.
  const updatePosition = async () => {
    try {
      const position: any = await getCurrentPosition();
      setLatitude(position.latitude);
      setLongitude(position.longitude);
      updateCurrentPosition(position.latitude, position.longitude, webRef);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    updatePosition();
  }, []);

  // Web -> WebView 수신.
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
      <ShowStarBtn webRef={webRef} />
      <WebView
        ref={webRef}
        style={styles.webview}
        source={{uri: 'http://192.168.0.12:5173/'}}
        onMessage={event => handleMessage(event)}
      />
      <Pressable
        onPress={() => updateCurrentPosition(latitude, longitude, webRef)}
        style={styles.current}>
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

import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import LocationIcon from '../assets/Location';
import Colors from '../Colors';
import {updateCurrentPosition} from '../utils/webViewBridge';
import WebView from 'react-native-webview';

interface PositionBtnProps {
  latitude: string;
  longitude: string;
  webRef: React.RefObject<WebView>;
}

const PositionBtn: React.FC<PositionBtnProps> = ({
  latitude,
  longitude,
  webRef,
}) => {
  return (
    <>
      <Pressable
        onPress={() => updateCurrentPosition(latitude, longitude, webRef)}
        style={styles.current}>
        <LocationIcon color={Colors.Blue600} size={24} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
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

export default PositionBtn;

import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const BottomSheetContent = () => {
  const cameraIcon = require('../../assets/Icons/Camera.png');
  const galleryIcon = require('../../assets/Icons/gallery.png');
  return (
    <View style={styles.contentWrapper}>
      <TouchableOpacity style={styles.btn}>
        <Image source={cameraIcon} style={styles.icon} />
        <Text style={styles.text}>카메라로 촬영하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Image source={galleryIcon} style={styles.icon} />
        <Text style={styles.text}>갤러리에서 선택하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomSheetContent;

const styles = StyleSheet.create({
  contentWrapper: {
    alignContent: 'flex-start',
    gap: 30,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

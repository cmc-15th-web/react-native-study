import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import CleanGallery from '@/components/common/CleanGallery';

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fontStyle}>Setting</Text>
      <Button title="Clean cache" onPress={CleanGallery} />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Gray900,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontStyle: {
    color: Colors.Gray400,
  },
});

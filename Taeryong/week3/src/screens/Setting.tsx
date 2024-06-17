import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';

const Setting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fontStyle}>Setting</Text>
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

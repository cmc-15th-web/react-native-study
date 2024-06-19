import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {colors} from '../styles/theme_color';

const Settings = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['black'],
  },
});

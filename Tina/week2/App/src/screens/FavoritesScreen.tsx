import THEME_COLOR from '@/styles/theme-color';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const FavoritesScreen = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLOR.Blue[200],
  },
});

export default FavoritesScreen;

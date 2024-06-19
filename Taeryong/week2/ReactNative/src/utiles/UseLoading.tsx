import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';

export default function UseLoading() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

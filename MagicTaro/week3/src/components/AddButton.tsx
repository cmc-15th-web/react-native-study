import Addimage from '../../asset/Addimage';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';

export default function AddButton() {
  return (
    <SafeAreaView style={styles.SafeContainer}>
      <View style={styles.ScreenContainer}>
        <Addimage />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeContainer: {
    flex: 1,
  },
  ScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 30,
  },
});

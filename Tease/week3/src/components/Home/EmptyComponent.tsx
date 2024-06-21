import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {colors} from '../../styles/theme_color';

const {width} = Dimensions.get('window');

const EmptyComponent = () => {
  return (
    <>
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>업로드한 사진이 없습니다.</Text>
      </View>
    </>
  );
};

export default EmptyComponent;

const styles = StyleSheet.create({
  //empty
  emptyContainer: {
    // flex: 1,
    minHeight: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 32,
  },
  emptyText: {
    color: colors['gray400'],
    fontSize: 16,
  },
});

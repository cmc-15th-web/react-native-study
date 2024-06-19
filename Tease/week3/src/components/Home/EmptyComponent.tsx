import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {colors} from '../../styles/theme_color';

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
  },
  emptyText: {
    color: colors['gray400'],
    fontSize: 16,
  },
});

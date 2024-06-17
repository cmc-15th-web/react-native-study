import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fontStyle}>Home</Text>
    </View>
  );
};

export default Home;

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

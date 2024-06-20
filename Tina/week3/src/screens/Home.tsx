import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import THEME_COLOR from '../styles/theme-color';
import GradientComponent from '../components/GradientComponent';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <GradientComponent
        component={<Text style={styles.header}>CMC님의 사진첩</Text>}
      />
      <Text>업로드한 사진이 없습니다.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLOR.Gray[900],
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME_COLOR.Purple,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 18,
  },
});
export default Home;

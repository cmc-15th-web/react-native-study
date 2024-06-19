import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {checkAllPermissions} from './src/utils/permissions';
import THEME_COLOR from './src/styles/theme-color';
import GradientText from './src/GradientText';

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      checkAllPermissions();
    }, 1500);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <GradientText style={styles.header} text="CMC님의 사진첩" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLOR.Black,
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
export default App;

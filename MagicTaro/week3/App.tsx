/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import Permission from './src/components/Permission';
import SplashScreen from 'react-native-splash-screen';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/components/Navigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000); //스플래시 활성화
  });

  const [Permissions, setPermissions] = useState(true);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        {Permissions ? (
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        ) : (
          <Permission />
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default App;

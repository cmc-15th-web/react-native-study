import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNav from '@src/components/BottomNav';
import ImageScreen from '@src/screens/ImageScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={BottomNav}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Detail" component={ImageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});

export default App;

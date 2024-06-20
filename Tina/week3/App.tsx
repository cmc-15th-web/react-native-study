import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {checkAllPermissions} from './src/utils/permissions';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigator from './src/components/BottomTabsNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ImageDetail from './src/screens/ImageDetail';
import {LogBox} from 'react-native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  LogBox.ignoreAllLogs();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabsNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ImageDetail"
        component={ImageDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      checkAllPermissions();
    }, 1500);
  }, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;

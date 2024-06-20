import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {checkAllPermissions} from './src/utils/permissions';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigator from './src/components/BottomTabsNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from './src/components/PhotoBottomSheet';

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
        <BottomTabsNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;

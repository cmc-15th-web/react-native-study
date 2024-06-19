import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {checkAllPermissions} from './src/utils/permissions';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigator from './src/components/BottomTabsNavigator';

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      checkAllPermissions();
    }, 1500);
  }, []);
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}

export default App;

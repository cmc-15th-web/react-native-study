import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {checkAllPermissions} from './src/utils/permissions';

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      checkAllPermissions();
    }, 1500);
  }, []);
  return <SafeAreaView />;
}

export default App;

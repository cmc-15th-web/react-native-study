import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import GlobalNavigation from '@/components/navigation/GlobalNavigation';
import {useEffect} from 'react';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000); //스플래시 활성화 시간
  });
  return (
    <NavigationContainer>
      <GlobalNavigation />
    </NavigationContainer>
  );
};

export default App;

import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import GlobalNavigation from '@/components/navigation/GlobalNavigation';
import {useEffect} from 'react';
import PermissionCheck from '@/utils/PermissionCheck';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000); //스플래시 활성화 시간
  });
  const accessability = PermissionCheck(); // accessability = {"album": true, "camera": true}
  console.log('🚀 ~ file: App.tsx:14 ~ App ~ accessability:', accessability);

  return (
    <NavigationContainer>
      <GlobalNavigation />
    </NavigationContainer>
  );
};

export default App;

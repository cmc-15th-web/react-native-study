import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavBar from './BottomNavBar';
import DetailPhoto from '@/screens/DetailPhoto';
import {RootStackParamList} from '@/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const GlobalNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        children={BottomNavBar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailPhoto"
        component={DetailPhoto}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default GlobalNavigation;

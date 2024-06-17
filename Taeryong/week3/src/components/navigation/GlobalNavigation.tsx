import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavBar from './BottomNavBar';
import AddPhoto from '@/screens/AddPhoto';

const Stack = createNativeStackNavigator();

const GlobalNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        children={BottomNavBar}
        options={{headerShown: false}}
      />
      <Stack.Screen name="AddPhoto" component={AddPhoto} />
    </Stack.Navigator>
  );
};

export default GlobalNavigation;

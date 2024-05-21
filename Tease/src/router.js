import Home from './pages/Home/Home';
import Add from './pages/Add/Add';
import Setting from './pages/Setting/Setting';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeIcon from './assets/icons/HomeIcon.js';
import AddIcon from './assets/icons/AddIcon.js';
import SettingIcon from './assets/icons/SettingIcon.js';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import {colors} from './styles/common.js';

let focuesColor = colors.purple.color;
const defaultColor = colors.darkGray.color;

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let IconComponent;
          switch (route.name) {
            case 'Home':
              IconComponent = HomeIcon;
              break;
            case 'Add':
              IconComponent = AddIcon;
              break;
            case 'Setting':
              IconComponent = SettingIcon;
              break;
            default:
              IconComponent = null;
          }
          const iconColor = focused ? focuesColor : defaultColor;
          return (
            IconComponent && (
              <IconComponent width={size} height={size} fill={iconColor} />
            )
          );
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Stack.Screen name="Add" component={Add} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};

export default Router;

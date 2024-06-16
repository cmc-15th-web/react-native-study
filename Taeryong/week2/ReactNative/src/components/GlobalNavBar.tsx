import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@/screens/Home';
import Favorites from '@/screens/Favorites';
import HomeIcon from '@/assets/icons/Home.svg';
import StarIcon from '@/assets/icons/Star.svg';
import Colors from '@/constants/Colors';

enableScreens();
const Tab = createBottomTabNavigator();

interface TabBarIconProps {
  focused: boolean;
}

const HandleHomeIcon = ({focused}: TabBarIconProps) => {
  return <HomeIcon color={focused ? Colors.Blue600 : Colors.Gray600} />;
};

const HandleStarIcon = ({focused}: TabBarIconProps) => {
  return <StarIcon color={focused ? Colors.Blue600 : Colors.Gray600} />;
};

const GlobalNavBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: Colors.Blue600,
          tabBarInactiveTintColor: Colors.Gray600,
          tabBarIcon: HandleHomeIcon,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarActiveTintColor: Colors.Blue600,
          tabBarInactiveTintColor: Colors.Gray600,
          tabBarIcon: HandleStarIcon,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default GlobalNavBar;

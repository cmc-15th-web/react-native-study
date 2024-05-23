import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Add from '../screens/Add';
import Setting from '../screens/Setting';
import HomeIcon from '../assets/icons/home.svg';
import AddIcon from '../assets/icons/add.svg';
import SettingIcon from '../assets/icons/theme.svg';

const Tab = createBottomTabNavigator();
const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: AddIcon,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: SettingIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

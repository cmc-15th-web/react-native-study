import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home';
import Home from '@/screens/Home';
import Favorites from '@/screens/Favorites';

enableScreens();
const Tab = createBottomTabNavigator();

function GlobalNavBar() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </>
  );
}

export default GlobalNavBar;

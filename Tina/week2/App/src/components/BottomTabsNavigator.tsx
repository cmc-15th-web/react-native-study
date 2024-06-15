import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '@/assets/HomeIcon';
import FavIcon from '@/assets/FavIcon';
import THEME_COLOR from '@/styles/theme-color';
import WebViewScreen from '@/screens/WebViewScreen';
import FavoritesScreen from '@/screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          height: 70,
          paddingBottom: 20,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={WebViewScreen}
        options={{
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
          headerShown: false,
          tabBarActiveTintColor: THEME_COLOR.Blue[600],
          tabBarInactiveTintColor: THEME_COLOR.Gray[600],
          tabBarLabelStyle: {fontSize: 12},
          tabBarLabel: '홈',
        }}
      />
      <Tab.Screen
        name="Setting"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({color}) => <FavIcon color={color} />,
          headerShown: false,
          tabBarActiveTintColor: THEME_COLOR.Blue[600],
          tabBarInactiveTintColor: THEME_COLOR.Gray[600],
          tabBarLabelStyle: {fontSize: 12},
          tabBarLabel: '즐겨찾기',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

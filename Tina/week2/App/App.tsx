import React from 'react';
import WebViewScreen from '@/screens/WebViewScreen.tsx';
import FavoritesScreen from '@/screens/FavoritesScreen.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '@/assets/HomeIcon';
import FavIcon from '@/assets/FavIcon';
import THEME_COLOR from '@/styles/theme-color';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            height: 70,
            paddingBottom: 20,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: THEME_COLOR.Blue[600],
          tabBarInactiveTintColor: THEME_COLOR.Gray[600],
        }}>
        <Tab.Screen
          name="Home"
          component={WebViewScreen}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
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
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({color}) => <FavIcon color={color} />,
            headerShown: false,
            tabBarActiveTintColor: THEME_COLOR.Blue[600],
            tabBarInactiveTintColor: THEME_COLOR.Gray[600],
            tabBarLabelStyle: {fontSize: 12},
            tabBarLabel: '즐겨찾기',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

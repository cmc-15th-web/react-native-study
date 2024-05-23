import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import HomeIcon from '../assets/icons/HomeIcon';
import AddIcon from '../assets/icons/add.svg';
import SettingIcon from '../assets/icons/ThemeIcon';
import color from '../styles/color';
import styled from 'styled-components/native';
import {BottomTabsProps} from '../types/navigator';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = ({navigation}: BottomTabsProps) => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            height: 60,
            paddingBottom: 8,
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: HomeIcon,
            headerShown: false,
            tabBarActiveTintColor: color.orange,
            tabBarInactiveTintColor: color.darkGray,
            tabBarLabelStyle: {fontSize: 12},
            tabBarLabel: '홈',
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarIcon: SettingIcon,
            headerShown: false,
            tabBarActiveTintColor: color.orange,
            tabBarInactiveTintColor: color.darkGray,
            tabBarLabelStyle: {fontSize: 12},
            tabBarLabel: '설정',
          }}
        />
      </Tab.Navigator>
      <AddTab onPress={() => navigation.push('Add')}>
        <AddIcon height={50} width={50} />
      </AddTab>
    </>
  );
};

export default BottomTabsNavigator;

const AddTab = styled.TouchableOpacity`
  position: absolute;
  align-self: center;
  bottom: 5px;
`;

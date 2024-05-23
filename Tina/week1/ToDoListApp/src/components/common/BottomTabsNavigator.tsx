import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Setting from '../../screens/Setting';
import HomeIcon from '../../assets/icons/HomeIcon';
import AddIcon from '../../assets/icons/AddIcon';
import SettingIcon from '../../assets/icons/ThemeIcon';
import THEME_COLOR from '../../styles/theme-color';
import styled from 'styled-components/native';
import {BottomTabsProps} from '../../types/navigator';
import {useThemeColor} from '../../store/color';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = ({navigation}: BottomTabsProps) => {
  const {theme} = useThemeColor();
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
            tabBarActiveTintColor: theme,
            tabBarInactiveTintColor: THEME_COLOR.darkGray,
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
            tabBarActiveTintColor: theme,
            tabBarInactiveTintColor: THEME_COLOR.darkGray,
            tabBarLabelStyle: {fontSize: 12},
            tabBarLabel: '설정',
          }}
        />
      </Tab.Navigator>
      <AddTab onPress={() => navigation.push('Add')}>
        <AddIcon />
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

import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Home from './screens/Home';
import Add from './screens/Add';
import Settings from './screens/Settings';
import Splash from './screens/Splash.tsx';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import {BottomTabIcon} from './types/BottomTabType.ts';
import {colors, colors_type} from './styles/theme_color.ts';

type RootStackParamList = {
  Splash: undefined;
  MainTab: undefined;
  Add: undefined;
};

type MainTabParamList = {
  Home: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const {width} = Dimensions.get('window');

const MainTab = () => {
  const focusedColor: colors_type = 'gradient100';
  const defaultColor: colors_type = 'gray400';
  const navigation: any = useNavigation(); //any 사용
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarStyle: {...styles.tabContainer},
          tabBarIcon: ({focused, color, size}) => {
            let IconComponent: React.FC<BottomTabIcon> | null = null;
            switch (route.name) {
              case 'Home':
                IconComponent = HomeIcon;
                break;

              case 'Settings':
                IconComponent = SettingsIcon;
                break;
              default:
                IconComponent = null;
            }
            const iconColor = focused
              ? colors[focusedColor]
              : colors[defaultColor];
            return (
              IconComponent && (
                <IconComponent width={size} height={size} fill={iconColor} />
              )
            );
          },
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={Home} options={{title: '혿'}} />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{title: '설정'}}
        />
      </Tab.Navigator>
      <TouchableOpacity
        style={[styles.addBtn, {left: width / 2 - 25}]}
        onPress={() => navigation.navigate('Add')}>
        <AddIcon width={60} height={60} fill={colors[focusedColor]} />
      </TouchableOpacity>
    </>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Add" component={Add} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: colors['black'],
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 8,
    borderWidth: 0.1,
    borderTopColor: colors['gray400'],
  },
  addBtn: {
    position: 'absolute',
    bottom: 31,
  },
});

export default Router;

import HomeIcon from './assets/Icons/HomeIcon.tsx';
import AddIcon from './assets/Icons/AddIcon.tsx';
import SettingsIcon from './assets/Icons/SettingsIcon.tsx';

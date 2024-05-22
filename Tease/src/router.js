import React, {useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Home from './pages/Home/Home';
import Add from './pages/Add/Add';
import Setting from './pages/Setting/Setting';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeIcon from './assets/icons/HomeIcon.js';
import AddIcon from './assets/icons/AddIcon.js';
import SettingIcon from './assets/icons/SettingIcon.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import {useStore} from './store';
import {colors} from './styles/commonStyle.js';

const defaultColor = colors.darkGray.color;

const {width} = Dimensions.get('window');

const MainTab = ({navigation}) => {
  const {color, setColor} = useStore(state => state);
  const [focusedColor, setFocusedColor] = useState(colors[color].color);

  useEffect(() => {
    const updateColor = async () => {
      setFocusedColor(colors[color].color);
    };
    updateColor();
  }, [color]);
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarStyle: {...styles.tabContainer},
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
            const iconColor = focused ? focusedColor : defaultColor;
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
          name="Setting"
          component={Setting}
          options={{title: '설정'}}
        />
      </Tab.Navigator>
      <TouchableOpacity
        style={[styles.addBtn, {left: width / 2 - 25}]}
        onPress={() => navigation.navigate('Add')}>
        <AddIcon width={50} height={50} fill={color} />
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
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 8,
  },
  addBtn: {
    position: 'absolute',
    bottom: 5.5,
  },
});

export default Router;

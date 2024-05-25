import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AddIcon, HomeBtn, ThemeBtn} from '../assets/icons';
import Home from '../screens/Home';
import Theme from '../screens/Theme';
import {useTheme} from '../context/ThemeContext';

const Tab = createBottomTabNavigator();

const BottomTabNavi = ({navigation}: any) => {
  const {themeColor} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#fff'},
        tabBarActiveTintColor: themeColor,
        tabBarInactiveTintColor: '#888888',
        tabBarIcon: ({color}) => {
          // 아이콘과 텍스트 색상 변경 설정
          let icon;

          if (route.name === '홈') {
            icon = <HomeBtn width={28} height={28} fill={color} />;
          } else if (route.name === '설정') {
            icon = <ThemeBtn width={28} height={28} fill={color} />;
          }

          return (
            <View style={styles.container}>
              {icon}
              <Text style={[styles.font, {color}]}>{route.name}</Text>
            </View>
          );
        },
      })}>
      <Tab.Screen
        name="홈"
        component={Home}
        options={{
          headerStyle: [styles.header],
          headerTitleStyle: {color: themeColor},
          // tabBarActiveTintColor: themeColor,
          // tabBarInactiveTintColor: '#888888',
          title: 'Today',
        }}
      />
      <Tab.Screen
        name="AddScreen"
        component={View}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Add')}
              style={styles.addBtn}>
              <AddIcon width={50} height={50} fill={themeColor} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="설정"
        component={Theme}
        options={{
          headerStyle: [styles.header],
          headerTitleStyle: {color: themeColor},
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
  font: {
    fontSize: 12,
  },
  addBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 60,
  },
});

export default BottomTabNavi;

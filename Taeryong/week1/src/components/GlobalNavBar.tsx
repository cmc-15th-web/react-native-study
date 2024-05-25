/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@/screens/Home';
import Setting from '@/screens/Setting';
import HomeIcon from '@/assets/icons/Home';
import ThemeIcon from '@/assets/icons/Theme';
import AddIcon from '@/assets/icons/Add';
import Colors from '@/constants/Colors';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';

enableScreens();
const Tab = createBottomTabNavigator();

function GlobalNavBar({themeColor}: {themeColor: string}) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleAddTask = () => {
    navigation.navigate('AddTask');
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: themeColor,
          tabBarInactiveTintColor: Colors.DarkGray,
          headerStyle: styles.header,
          headerTitleStyle: styles.headerFont,
          tabBarStyle: styles.tabBar,
        }}>
        <Tab.Screen
          name="홈"
          component={Home}
          options={{
            headerTitle: 'Today',
            headerTintColor: themeColor,
            tabBarIcon: ({color, size}) => (
              <HomeIcon color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="설정"
          component={Setting}
          options={{
            headerTitle: '설정',
            headerTintColor: themeColor,
            tabBarIcon: ({color, size}) => (
              <ThemeIcon color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      <TouchableOpacity style={styles.AddTask} onPress={() => handleAddTask()}>
        <AddIcon />
      </TouchableOpacity>
    </>
  );
}

export default GlobalNavBar;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.Gray,
    borderBottomColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
  },
  headerFont: {
    fontSize: 18,
  },
  tabBar: {
    backgroundColor: Colors.White,
  },
  marginTop: {
    marginTop: 20,
  },
  AddTask: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 25,
  },
});

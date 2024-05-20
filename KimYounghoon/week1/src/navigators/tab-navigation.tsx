import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, SettingsScreen} from '../screens';
import {COLORS} from '../theme';
import {AddIcon, HomeIcon, ThemeIcon} from '../components/custom-icons';
import {useCustomStore} from '../hooks/useCustomStore';
import {TabNavProps} from '../types/navigator';

const Tab = createBottomTabNavigator();

const TabNavigation = ({navigation}: TabNavProps) => {
  const {theme} = useCustomStore();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS[theme],
        tabBarInactiveTintColor: COLORS.primaryDarkGray,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.iconContainer}>
              <HomeIcon width={28} height={28} fill={color} />
              <Text style={[styles.tabBarLabel, {color}]}>홈</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={View}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Task')}
              style={styles.addButton}>
              <AddIcon width={50} height={50} fill={COLORS[theme]} />
            </TouchableOpacity>
          ),
        }}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Task');
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View style={styles.iconContainer}>
              <ThemeIcon width={28} height={28} fill={color} />
              <Text style={[styles.tabBarLabel, {color}]}>설정</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    display: 'flex',
    height: 61,
    width: '100%',
    backgroundColor: COLORS.primaryWhite,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 999,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarLabel: {
    fontSize: 12,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabNavigation;

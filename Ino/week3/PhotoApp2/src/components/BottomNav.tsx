import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Colors from '../Colors';
import {useUserStore} from '@src/store/userStore';

import HomeIcon from '../assets/icons/Home';
import AddIcon from '../assets/icons/Add';
import ThemeIcon from '../assets/icons/Theme';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  const {name} = useUserStore();
  const header = name + '님의 사진첩';

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.Gradient100,
        tabBarInactiveTintColor: Colors.Gray400,
        headerShown: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.bottomBox,
        headerStyle: {backgroundColor: Colors.Gray900},
        headerTitleStyle: {color: Colors.Pink},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: header,
          tabBarIcon: ({color, focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <HomeIcon color={color} size={28} />
              <Text
                style={{
                  color: focused ? Colors.Pink : Colors.Gray400,
                  fontSize: 12,
                }}>
                홈
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View style={{top: -30}}>
              <AddIcon color={Colors.Gradient100} size={60} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <ThemeIcon color={color} size={24} />
              <Text
                style={{
                  color: focused ? Colors.Pink : Colors.Gray400,
                  fontSize: 12,
                }}>
                홈
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomBox: {
    borderWidth: 1,
    borderColor: Colors.Gray600,
    backgroundColor: Colors.Gray900,
    paddingHorizontal: 80,
    paddingVertical: 6,
  },
  text: {
    fontStyle: 'normal',
  },
});

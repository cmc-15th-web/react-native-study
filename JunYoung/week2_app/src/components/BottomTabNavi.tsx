import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Favorite from "../screens/Favorite";
import NaverMap from "../screens/NaverMap";
import theme from "../theme";

import { HomeBtn } from "../assets/icons";
import { StarBtn } from "../assets/icons";

const Tab = createBottomTabNavigator();

const BottomTabNavi = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.blue600,
          tabBarInactiveTintColor: theme.colors.gray600,
        }}
      >
        <Tab.Screen
          name="홈"
          component={NaverMap}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <HomeBtn width={28} height={28} fill={color} />
            ),
          }}
        />
        <Tab.Screen
          name="즐겨찾기"
          component={Favorite}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <StarBtn width={28} height={28} fill={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavi;

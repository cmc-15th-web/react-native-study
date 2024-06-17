import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";

// 화면 추가
import HomeScreen from "../screens/HomeScreen";
import ThemeScreen from "../screens/ThemeScreen";
import BottomSheetModal from "./BottomSheetModal";

// 아이콘 추가
import { HomeBtn, PLusBtn, ThemeBtn } from "../assets/icons";

const Tab = createBottomTabNavigator();

const BottomTabNavi = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ tabBarStyle: { backgroundColor: "#121212" } }}
      >
        <Tab.Screen
          name="홈"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <HomeBtn width={28} height={28} fill={color} />
            ),
          }}
        />
        <Tab.Screen
          name="즐겨찾기"
          component={ThemeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <ThemeBtn width={28} height={28} fill={color} />
            ),
          }}
        />
      </Tab.Navigator>
      <TouchableOpacity style={styles.addBtn} onPress={toggleModal}>
        <PLusBtn width={50} height={50} />
      </TouchableOpacity>
      <BottomSheetModal isVisible={isModalVisible} onClose={toggleModal} />
    </NavigationContainer>
  );
};

export default BottomTabNavi;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#F5F5F5",
    borderBottomWidth: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
  font: {
    fontSize: 12,
  },
  addBtn: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 55,
    left: Dimensions.get("window").width / 2 - 25, // 화면 가로의 절반에서 버튼의 절반 너비를 뺌
  },
  tabBar: {
    height: 60,
  },
});

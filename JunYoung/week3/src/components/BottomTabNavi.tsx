import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient"; // 그라디언트 라이브러리
import theme from "../theme";

// 화면 추가
import HomeScreen from "../screens/HomeScreen"; // 홈 화면 컴포넌트
import ThemeScreen from "../screens/ThemeScreen"; // 설정 화면 컴포넌트
import BottomSheetModal from "./BottomSheetModal"; // 하단 시트 모달 컴포넌트

// 아이콘 추가
import { HomeBtn, PLusBtn, ThemeBtn } from "../assets/icons"; // 아이콘 컴포넌트들
import { ImagePickerResult } from "../types"; // 이미지 피커 결과 타입

const Tab = createBottomTabNavigator(); // 탭 네비게이터 생성

const BottomTabNavi = () => {
  // 모달 표시 상태를 관리하는 상태 변수
  const [isModalVisible, setModalVisible] = React.useState(false);
  // 선택된 이미지를 관리하는 상태 변수
  const [images, setImages] = React.useState<ImagePickerResult[]>([]);

  // 모달 표시/숨기기 토글 함수
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // 이미지 선택 시 호출되는 함수
  const handleImageSelect = (selectedImages: ImagePickerResult[]) => {
    console.log("Selected Images:", selectedImages);
    setImages((prevImages) => [...prevImages, ...selectedImages]); // 기존 이미지 배열에 새로운 이미지를 추가
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: theme.colors.gray900 },
        }} // 탭 바 스타일 설정
      >
        <Tab.Screen
          name="Home"
          options={{
            headerShown: false, // 헤더 숨기기
            tabBarIcon: ({ color }) => (
              <HomeBtn width={28} height={28} fill={color} /> // 홈 아이콘
            ),
            tabBarActiveTintColor: theme.colors.pink, // 활성 탭 색상
          }}
        >
          {(props) => <HomeScreen {...props} images={images} />}
        </Tab.Screen>
        <Tab.Screen
          name="Theme"
          component={ThemeScreen} // ThemeScreen 컴포넌트
          options={{
            headerShown: false, // 헤더 숨기기
            tabBarIcon: ({ color }) => (
              <ThemeBtn width={28} height={28} fill={color} /> // 설정 아이콘
            ),
            tabBarActiveTintColor: theme.colors.pink, // 활성 탭 색상
          }}
        />
      </Tab.Navigator>
      <TouchableOpacity style={styles.addBtn} onPress={toggleModal}>
        <PLusBtn width={50} height={50} />
      </TouchableOpacity>
      <BottomSheetModal
        isVisible={isModalVisible} // 모달 표시 상태 전달
        onClose={toggleModal} // 모달 닫기 함수 전달
        onImageSelect={handleImageSelect} // 이미지 선택 함수 전달
      />
    </>
  );
};

export default BottomTabNavi;

// 스타일 정의
const styles = StyleSheet.create({
  addBtn: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 55,
    left: Dimensions.get("window").width / 2 - 25, // 화면 가로의 절반에서 버튼의 절반 너비를 뺌
  },
});

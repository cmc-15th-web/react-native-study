import "react-native-gesture-handler"; // React Navigation과 Gesture Handler를 통합하기 위한 필수 패키지
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native"; // React Navigation의 네비게이션 컨테이너
import { createStackNavigator } from "@react-navigation/stack"; // Stack Navigator 생성 함수
import { View, ActivityIndicator } from "react-native"; // 로딩 스피너 컴포넌트
import Splash from "./src/screens/Splash"; // Splash 화면 컴포넌트
import BottomTabNavi from "./src/components/BottomTabNavi"; // Bottom Tab Navigator 컴포넌트
import Details from "./src/screens/Details"; // Details 화면 컴포넌트
import theme from "./src/theme"; // 테마 설정
import { format } from "date-fns"; // 날짜 형식을 포맷하기 위한 라이브러리

const Stack = createStackNavigator(); // Stack Navigator 생성

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false); // 앱 준비 상태를 관리하는 state 변수

  useEffect(() => {
    // 앱 초기화 및 준비 작업을 수행하는 비동기 함수
    const prepare = async () => {
      // 2초 대기하여 준비 시간을 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsReady(true); // 준비 완료 상태로 변경
    };

    prepare(); // 준비 함수 호출
  }, []);

  // 준비 상태가 완료되지 않았으면 Splash 화면을 렌더링
  if (!isReady) {
    return <Splash />;
  }

  const currentDateTime = format(new Date(), "yyyy.MM.dd HH:mm"); // 현재 날짜와 시간을 형식화

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.gray900,
          },
          headerTintColor: theme.colors.white,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="BottomTabNavi"
          component={BottomTabNavi}
          options={{ headerShown: false }} // BottomTabNavi 화면에서는 헤더를 숨김
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: currentDateTime, // 헤더에 현재 시간 표시
            headerRight: () => null, // headerRight에 아무것도 표시하지 않음
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

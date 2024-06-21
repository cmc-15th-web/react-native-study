import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import Splash from "./src/screens/Splash";
import BottomTabNavi from "./src/components/BottomTabNavi";
import Details from "./src/screens/Details";
import theme from "./src/theme";
import { format } from "date-fns";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsReady(true);
      await SplashScreen.hideAsync();
    };

    prepare();
  }, []);

  if (!isReady) {
    return <Splash />;
  }
  const currentDateTime = format(new Date(), "yyyy.MM.dd HH:mm");

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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route }) => ({
            title: currentDateTime, // 헤더에 현재 시간 표시
            headerRight: () => null, // headerRight에 아무것도 표시하지 않음
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

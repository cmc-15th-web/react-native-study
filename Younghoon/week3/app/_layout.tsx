import { Stack } from "expo-router/stack";
import { SafeAreaView, View } from "react-native";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Splash } from "@/components/splash";
import { usePermission } from "@/hooks/use-permission";
import { colorPalette } from "@/styles/colors";
import { GradientText } from "@/components/ui/gradient-text";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function _layout() {
  const { requestCameraPermission, requestGalleryPermission } = usePermission();

  const [appIsReady, setAppIsReady] = useState<boolean>(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      requestCameraPermission();
      requestGalleryPermission();
    }
  }, [appIsReady]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <Splash />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <Stack
            screenOptions={{
              headerShown: true,
              headerStyle: { backgroundColor: colorPalette.gray900 },
              headerTitleAlign: "left",
              headerTitle: () => (
                <GradientText
                  title="CMC님의 사진첩"
                  maskedView={{
                    height: 50,
                    marginTop: 20,
                    marginLeft: 18,
                  }}
                  textStyle={{
                    fontSize: 24,
                    fontWeight: "600",
                  }}
                />
              ),
            }}
          >
            <Stack.Screen name="(tabs)" />
          </Stack>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

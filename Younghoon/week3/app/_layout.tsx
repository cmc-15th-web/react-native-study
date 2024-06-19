import { Stack } from "expo-router/stack";
import { SafeAreaView, View } from "react-native";
import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Splash } from "@/components/splash";
import { usePermission } from "@/hooks/use-permission";
import { colorPalette } from "@/styles/colors";
import { GradientText } from "@/components/ui/gradient-text";

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
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: colorPalette.gray900 },
            headerTitle: () => (
              <View
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 20,
                  justifyContent: "flex-start",
                }}
              >
                <GradientText
                  title="CMC님의 사진첩"
                  maskedView={{
                    height: 50,
                  }}
                  textStyle={{
                    fontSize: 24,
                    fontWeight: "600",
                  }}
                />
              </View>
            ),
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}

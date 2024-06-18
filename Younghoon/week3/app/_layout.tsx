import { Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Splash } from "@/components/splash";
import { usePermission } from "@/hooks/use-permission";

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

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
      (async () => {
        await requestCameraPermission();
        await requestGalleryPermission();
      })();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return <Splash />;
  }
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onLayout={onLayoutRootView}
    >
      <Text>SplashScreen Demo! 👋</Text>
    </View>
  );
}

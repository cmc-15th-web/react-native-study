import { Platform, SafeAreaView as SafeAreaViewIOS } from "react-native";
import { SafeAreaView as SafeAreaViewAndroid } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export const WebviewWrapper = ({ children }: { children: React.ReactNode }) => {
  const isIOS = Platform.OS === "ios";
  const SafeAreaView = isIOS ? SafeAreaViewIOS : SafeAreaViewAndroid;

  return (
    <SafeAreaView className="flex-1">
      <StatusBar hidden={false} />
      {children}
    </SafeAreaView>
  );
};

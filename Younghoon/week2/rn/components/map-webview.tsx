import { useLocation } from "@/hooks/use-location";
import { onWebviewMessage } from "@/libs/utils";
import { useRef } from "react";
import { Platform } from "react-native";
import { WebView } from "react-native-webview";

export function MapWebview() {
  const { location } = useLocation();

  const webViewRef = useRef<WebView>(null);

  return (
    <>
      <WebView
        originWhitelist={["*"]}
        source={{
          uri: `http://172.30.72.122:5173`,
        }}
        javaScriptEnabled={true}
        userAgent={`webview-${Platform.OS === "ios" ? "ios" : "android"}`}
        ref={webViewRef}
        onMessage={onWebviewMessage}
        injectedJavaScriptObject={{ location }}
      />
    </>
  );
}

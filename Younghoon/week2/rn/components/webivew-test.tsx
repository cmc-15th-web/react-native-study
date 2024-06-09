import { useLocation } from "@/hooks/use-location";
import { useRef } from "react";
import { Platform } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";

export function WebviewTest() {
  const { location } = useLocation();

  const webViewRef = useRef<WebView>(null);

  const onMessage = (event: WebViewMessageEvent) => {
    try {
      const message = JSON.parse(event.nativeEvent.data);

      console.log(message);
    } catch (error) {
      console.error("parse message error: ", error);
    }
  };

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
        onMessage={onMessage}
        injectedJavaScriptObject={{ location }}
      />
    </>
  );
}

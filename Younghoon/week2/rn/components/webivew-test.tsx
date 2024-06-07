import { useLocation } from "@/hooks/use-location";
import { useRef, useEffect, useState } from "react";
import { Alert, Platform } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";

export function WebviewTest() {
  const { location } = useLocation();

  const webViewRef = useRef<WebView>(null);

  useEffect(() => {
    if (webViewRef.current && location) {
      const { latitude, longitude } = location.coords;
      webViewRef.current.postMessage(
        JSON.stringify({ type: "location", latitude, longitude })
      );
    }
  }, [location]);

  const injectCustomJavascript = () => {};

  const onMessage = (event: WebViewMessageEvent) => {
    try {
      const message = JSON.parse(event.nativeEvent.data);

      console.log(message);

      if (message.type === "getLocation") {
        if (location) {
          const { latitude, longitude } = location.coords;
          webViewRef.current?.postMessage(
            JSON.stringify({
              type: "location",
              latitude,
              longitude,
            })
          );
        }
      }
    } catch (error) {
      console.error("parse message error: ", error);
    }
  };

  return (
    <>
      <WebView
        originWhitelist={["*"]}
        source={{
          uri: `http://172.30.1.97:5173`,
        }}
        javaScriptEnabled={true}
        userAgent={`webview-${Platform.OS === "ios" ? "ios" : "android"}`}
        ref={webViewRef}
        onMessage={onMessage}
        onLoadEnd={injectCustomJavascript}
        injectedJavaScriptObject={{ location }}
      />
    </>
  );
}

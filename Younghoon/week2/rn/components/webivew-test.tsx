import { useLocation } from "@/hooks/use-location";
import { useNetwork } from "@/hooks/use-network";
import { useRef, useEffect, useState } from "react";
import { Alert, Platform } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";

export function WebviewTest() {
  const { localIP } = useNetwork();
  const { location } = useLocation();

  const webViewRef = useRef<WebView>(null);

  const [reloading, setReloading] = useState<boolean>(false);

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

      if (message.type === "mapLoaded") {
        setReloading(true);
      }
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

  console.log(location);

  return (
    <>
      <WebView
        originWhitelist={["*"]}
        source={{
          uri: `http://${localIP}:5173`,
        }}
        javaScriptEnabled={true}
        userAgent={`webview-${Platform.OS === "ios" ? "ios" : "android"}`}
        ref={webViewRef}
        onMessage={onMessage}
        onLoadEnd={injectCustomJavascript}
      />
    </>
  );
}

import { useLocation } from "@/hooks/use-location";
import { useNetwork } from "@/hooks/use-network";
import { useRef, useEffect } from "react";
import { Platform } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";

export function WebviewTest() {
  const { localIP } = useNetwork();
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

  const injectCustomJavascript = () => {
    webViewRef.current?.injectJavaScript(`
      document.body.style.backgroundColor = 'black';
      true;
    `);
  };

  const onMessage = (event: WebViewMessageEvent) => {
    try {
      const message = JSON.parse(event.nativeEvent.data);
      if (message.type === "getLocation") {
        if (location) {
          const { latitude, longitude } = location.coords;
          webViewRef.current?.postMessage(
            JSON.stringify({ type: "location", latitude, longitude })
          );
        }
      }
    } catch (error) {
      console.error("parse message error: ", error);
    }
  };

  return (
    <>
      {localIP ? (
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
      ) : null}
    </>
  );
}

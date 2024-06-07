import { useLocation } from "@/hooks/use-location";
import { useNetwork } from "@/hooks/use-network";
import { useRef } from "react";
import { Platform } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";

export function WebviewTest() {
  const { localIP } = useNetwork();
  const { location } = useLocation();

  const webViewRef = useRef<WebView>(null);

  const injectCustomJavascript = () => {
    webViewRef.current?.injectJavaScript(`
      document.body.style.backgroundColor = 'black';
      true;
    `);
  };
  injectCustomJavascript();

  const onMessage = (event: WebViewMessageEvent) => {
    const message = JSON.parse(event.nativeEvent.data);
    if (message.type === "getLocation") {
      if (location) {
        const { latitude, longitude } = location.coords;
        webViewRef.current?.postMessage(
          JSON.stringify({ type: "location", latitude, longitude })
        );
      }
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
        />
      ) : null}
    </>
  );
}

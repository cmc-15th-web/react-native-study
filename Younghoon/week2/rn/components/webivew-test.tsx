import { useRef } from "react";
import { Alert, Platform } from "react-native";
import { WebView, WebViewMessageEvent } from "react-native-webview";

export function WebviewTest() {
  const webViewRef = useRef<WebView>(null);

  const injectCustomJavascript = () => {
    webViewRef.current?.injectJavaScript(`
      document.body.style.backgroundColor = 'black';
      true;
    `);
  };
  injectCustomJavascript();

  const getMessage = (event: WebViewMessageEvent) => {
    Alert.alert(event.nativeEvent.data);
  };

  return (
    <WebView
      originWhitelist={["*"]}
      source={{
        uri: "http://172.30.1.8:5173/",
      }}
      javaScriptEnabled={true}
      userAgent={`webview-${Platform.OS === "ios" ? "ios" : "android"}`}
      ref={webViewRef}
      onMessage={getMessage}
    />
  );
}

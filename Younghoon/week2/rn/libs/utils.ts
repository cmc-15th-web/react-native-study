import { WebViewMessageEvent } from "react-native-webview";

export const onWebviewMessage = (event: WebViewMessageEvent) => {
  try {
    const message = JSON.parse(event.nativeEvent.data);
    return message;
  } catch (error) {
    console.error("parse message error: ", error);
    return error;
  }
};

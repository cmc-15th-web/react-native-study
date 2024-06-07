interface Window {
  kakao: any;
  ReactNativeWebView: {
    postMessage: (message: string) => void;
  };
}

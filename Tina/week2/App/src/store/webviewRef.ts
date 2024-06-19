import WebView from 'react-native-webview';
import {create} from 'zustand';

export interface RefStoreProps {
  webviewRef: React.RefObject<WebView<{}>> | null;
  initWebview: (input: React.RefObject<WebView<{}>>) => void;
}

export const useWebviewRef = create<RefStoreProps>(set => ({
  webviewRef: null,
  initWebview: (input: React.RefObject<WebView<{}>>) =>
    set({
      webviewRef: input,
    }),
}));

import WebView from 'react-native-webview';
import {create} from 'zustand';

interface Store {
  starList: String[];
  webViewRef: React.RefObject<WebView> | null;
  setStarList: (list: String[]) => void;
  setWebViewRef: (ref: React.RefObject<WebView>) => void;
}
export const useStore = create<Store>(set => ({
  starList: [],
  webViewRef: null,
  setStarList: (list: String[]) => set({starList: list}),
  setWebViewRef: (ref: React.RefObject<WebView>) => set({webViewRef: ref}),
}));

import { useEffect } from 'react';

export const useWebview = ({ type, data }: { type: string; data: any }) => {
  useEffect(() => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(JSON.stringify({ type, data }));
    }
  }, [data]);
};

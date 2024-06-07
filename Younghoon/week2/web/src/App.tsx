import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: 'loadComplte' }),
      );
    }
  }, []);

  return <div></div>;
}

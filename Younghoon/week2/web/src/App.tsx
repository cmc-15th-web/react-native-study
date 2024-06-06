import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage('asdf');
    }
  }, []);

  return <div></div>;
}

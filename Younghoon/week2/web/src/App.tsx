import { useEffect } from 'react';
import { KakaoMap } from './components/kakao-map';

export default function App() {
  useEffect(() => {
    window.ReactNativeWebView?.postMessage(
      JSON.stringify({ type: 'getLocation' }),
    );
  }, []);

  return <KakaoMap />;
}

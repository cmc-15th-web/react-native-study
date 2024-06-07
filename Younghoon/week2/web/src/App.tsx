import { useEffect } from 'react';
import { KakaoMap } from './components/kakao-map';

export default function App() {
  useEffect(() => {
    const messageHandler = (event: { data: any }) => {
      console.log(event.data);
    };

    window.addEventListener('message', messageHandler);

    return () => {
      window.removeEventListener('message', messageHandler);
    };
  }, []);

  useEffect(() => {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({ type: 'getLocation' }),
    );
  }, []);

  return <KakaoMap />;
}

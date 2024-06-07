import { useEffect, useState } from 'react';

export function KakaoMap() {
  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.defer = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY}&autoload=false`;
    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.394726159, 127.111209047),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        if (currentLocation) {
          const moveLatLon = new window.kakao.maps.LatLng(
            currentLocation.latitude,
            currentLocation.longitude,
          );
          map.setCenter(moveLatLon);
        }

        if (window.ReactNativeWebView) {
          window.ReactNativeWebView.postMessage(
            JSON.stringify({ type: 'mapLoaded' }),
          );
        }
      });
    };
    document.head.appendChild(script);
  }, [currentLocation]);

  useEffect(() => {
    window.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'location') {
        setCurrentLocation({
          latitude: message.latitude,
          longitude: message.longitude,
        });
      }
    });
  }, []);

  return <div id="map" style={{ width: '100%', height: '100vh' }} />;
}

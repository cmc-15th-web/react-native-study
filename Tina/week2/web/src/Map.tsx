import { useEffect, useState } from 'react';

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 37.5559,
    longitude: 126.9723,
  });

  useEffect(() => {
    if (!window.ReactNativeWebView) return;
    const handleMessage = (e: MessageEvent<any>) => {
      try {
        const response = JSON.parse(e.data);
        if (response.type === 'location') {
          setCurrentLocation({
            latitude: response.latitude,
            longitude: response.longitude,
          });
        }
      } catch (error) {
        console.error('Error parsing message data:', error);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', (e) => console.log(e));
  }, []);

  useEffect(() => {
    const { naver } = window;
    if (naver) {
      const location = new naver.maps.LatLng(
        currentLocation.latitude,
        currentLocation.longitude
      );
      const map = new naver.maps.Map('map', {
        center: location,
        zoom: 17,
      });
      const marker = new naver.maps.Marker({
        position: location,
        map: map,
      });
    }
  }, [currentLocation]);

  return <div id='map' style={{ width: '100vw', height: '100vh' }}></div>;
};

export default Map;

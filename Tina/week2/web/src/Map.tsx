import { useRef, useEffect } from 'react';

const MapInformation = () => {
  const mapRef = useRef(null);
  const lat = 37.282;
  const lng = 127.0463;
  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 17, // 지도 확대 정도
      });
      new naver.maps.Marker({
        position: location,
        map,
      });
    }
  }, []);

  return <div ref={mapRef} style={{ width: '100vw', height: '100vh' }}></div>;
};

export default MapInformation;

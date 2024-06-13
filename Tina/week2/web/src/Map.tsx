import { useEffect } from 'react';

const Map = () => {
  const lat = 37.282;
  const lng = 127.0463;

  useEffect(() => {
    const { naver } = window;
    if (naver) {
      const location = new naver.maps.LatLng(lat, lng);
      new naver.maps.Map('map', {
        center: location,
        zoom: 17,
      });
    }
  }, []);

  return <div id='map' style={{ width: '100vw', height: '100vh' }}></div>;
};

export default Map;

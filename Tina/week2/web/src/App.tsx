import { useEffect, useState } from 'react';
import { FavoriteIcon } from './components/FavoriteIcon';
import THEME_COLOR from './styles/theme-color';
import './styles/App.css';
import { GetLocationIcon } from './components/GetLocationIcon';

function App() {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 37.5559,
    longitude: 126.9723,
  });
  const [favBtnActivated, setFavBtnActivated] = useState<boolean>(false);
  const mapLocation = new naver.maps.LatLng(
    currentLocation.latitude,
    currentLocation.longitude
  );
  const map = new naver.maps.Map('map', {
    center: mapLocation,
    zoom: 17,
  });
  const marker = new naver.maps.Marker({
    position: mapLocation,
    map: map,
    icon: {
      url: 'assets/current-location-marker.svg',
    },
  });

  naver.maps.Event.addListener(map, 'click', function (e) {
    marker.setIcon({
      url: 'assets/location-pin.svg',
    });
    marker.setPosition(e.coord);
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

  return (
    <div className='App'>
      <FavoriteIcon
        onClick={() => setFavBtnActivated(!favBtnActivated)}
        color={favBtnActivated ? THEME_COLOR.Blue[600] : THEME_COLOR.Gray[600]}
      />
      <GetLocationIcon
        onClick={() => {
          marker.setIcon({
            url: 'assets/current-location-marker.svg',
          });
          marker.setPosition(mapLocation);
        }}
      />
      <div id='map' style={{ width: '100vw', height: '100vh' }}></div>;
    </div>
  );
}

export default App;

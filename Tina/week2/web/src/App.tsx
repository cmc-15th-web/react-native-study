import { useEffect, useState } from 'react';
import { FavoriteIcon } from './components/FavoriteIcon';
import THEME_COLOR from './styles/theme-color';
import './styles/App.css';
import { GetLocationIcon } from './components/GetLocationIcon';
import { getMessageFromRN } from './utils/map';
import FavIconWithKr from './components/FavIconWithKr';

function App() {
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 37.5559,
    longitude: 126.9723,
  });
  const [favList, setFavList] = useState<any[]>([]);
  const [favBtnActivated, setFavBtnActivated] = useState<boolean>(false);
  const [showfavBtnActivated, setShowFavBtnActivated] =
    useState<boolean>(false);

  useEffect(() => {
    getMessageFromRN(setCurrentLocation, setFavList);
    return () => window.removeEventListener('message', (e) => console.log(e));
  }, []);

  useEffect(() => {
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

    if (showfavBtnActivated && favList && Array.isArray(favList)) {
      favList.map((favorite) => {
        return new naver.maps.Marker({
          position: favorite.position,
          map: map,
          icon: {
            url: 'assets/star-icon.svg',
          },
        });
      });
    }

    if (favBtnActivated) {
      naver.maps.Event.addListener(map, 'click', function (e) {
        marker.setIcon({
          url: 'assets/location-pin.svg',
        });
        marker.setPosition(e.coord);
        naver.maps.Service.reverseGeocode(
          {
            coords: e.coord,
          },
          function (status, response) {
            window.ReactNativeWebView.postMessage(
              JSON.stringify({
                type: 'address',
                id: response.v2.results[0].code.id,
                address: response.v2.address.jibunAddress,
                position: e.coord,
              })
            );
          }
        );
      });
    } else {
      marker.setIcon({
        url: 'assets/current-location-marker.svg',
      });
      marker.setPosition(mapLocation);
    }

    return () => {
      naver.maps.Event.clearListeners(map, 'click');
      marker?.setMap(null);
    };
  }, [currentLocation, favBtnActivated]);

  return (
    <div className='App'>
      <FavoriteIcon
        onClick={() => {
          setFavBtnActivated(!favBtnActivated);
        }}
        color={favBtnActivated ? THEME_COLOR.Blue[600] : THEME_COLOR.Gray[600]}
      />
      <FavIconWithKr
        selected={showfavBtnActivated}
        onClick={() => setShowFavBtnActivated(!showfavBtnActivated)}
      />
      <GetLocationIcon onClick={() => setFavBtnActivated(!favBtnActivated)} />
      <div id='map' style={{ width: '100vw', height: '100vh' }}></div>;
    </div>
  );
}

export default App;

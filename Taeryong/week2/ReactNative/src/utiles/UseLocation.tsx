/* eslint-disable react-hooks/exhaustive-deps */
// utils/useLocation.js
import {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';

const UseLocation = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  // 데이터 확인
  console.log('latitude', location?.latitude, 'longitude', location?.longitude);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  const checkLocationPermission = async () => {
    const permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
    const result = await check(permission);

    switch (result) {
      case RESULTS.UNAVAILABLE:
        Alert.alert('Location services are not available on this device.');
        break;
      case RESULTS.DENIED:
        requestLocationPermission();
        break;
      case RESULTS.GRANTED:
        getLocation();
        break;
      case RESULTS.BLOCKED:
        Alert.alert(
          'Location permission is blocked. Please enable it in settings.',
        );
        break;
    }
  };

  const requestLocationPermission = async () => {
    const permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
    const result = await request(permission);

    if (result === RESULTS.GRANTED) {
      getLocation();
    } else {
      Alert.alert('Location permission denied.');
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
      },
      error => {
        Alert.alert('Error getting location', error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  return location;
};

export default UseLocation;

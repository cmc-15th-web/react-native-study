import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

function Map(): React.JSX.Element {
  const [latitude, setLatitude] = useState('');
  const [logitude, setLongitude] = useState('');

  useEffect(() => {
    // 현재위치 받아오기
    Geolocation.getCurrentPosition(
      position => {
        const lat = JSON.stringify(position.coords.latitude);
        const long = JSON.stringify(position.coords.longitude);
        setLatitude(lat);
        setLongitude(long);
      },
      err => {
        console.log(err.code, err.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  return (
    <View>
      <Text>Latitude : {latitude}</Text>
      <Text>Longitude : {logitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default Map;

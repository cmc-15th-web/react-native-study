import mapboxgl, { Map, Marker } from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import { fetchAddress } from '@/services/map.service';
import { useWebview } from '@/hooks/use-webview';
import { MapboxMapButton } from './mapbox-map-button';

import 'mapbox-gl/dist/mapbox-gl.css';

export function MapboxMap() {
  const map = useRef<Map | undefined>(undefined);
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const currentLocationMarker = useRef<mapboxgl.Marker | undefined>(undefined);
  const clickedMarker = useRef<mapboxgl.Marker | undefined>(undefined);

  const [initialLocationSet, setInitialLocationSet] = useState<boolean>(false);
  const [currentLng, setCurrentLng] = useState<number>(0);
  const [currentLat, setCurrentLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(-70.9);
  const [lat, setLat] = useState<number>(42.35);
  const [zoom, setZoom] = useState<number>(15);
  const [address, setAddress] = useState<string>('');
  const [markers, setMarkers] = useState<
    Array<{ lng: number; lat: number; address: string }>
  >([]);
  const [clickedLocation, setClickedLocation] = useState<{
    lng: number;
    lat: number;
    address: string;
  } | null>(null);

  useWebview({ type: 'test', data: { lng, lat, zoom, address } });

  useEffect(() => {
    const savedMarkers = localStorage.getItem('markers');
    if (savedMarkers) {
      setMarkers(JSON.parse(savedMarkers));
    }
  }, []);

  useEffect(() => {
    markers.forEach(({ lng, lat }) => {
      new Marker().setLngLat([lng, lat]).addTo(map.current!);
    });
  }, [markers]);

  useEffect(() => {
    if (map.current) return;
    map.current = new Map({
      container: mapContainer.current as HTMLElement | string,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [currentLng, currentLat],
      zoom,
    });

    const currentLocationEl = document.createElement('div');
    currentLocationEl.className = 'current-location-marker';
    currentLocationMarker.current = new Marker({ element: currentLocationEl })
      .setLngLat([currentLng, currentLat])
      .addTo(map.current);

    map.current.on('click', async (e) => {
      const { lng, lat } = e.lngLat;
      const address = await fetchAddress(lng, lat);

      if (clickedMarker.current) {
        clickedMarker.current.remove();
      }

      clickedMarker.current = new Marker()
        .setLngLat([lng, lat])
        .addTo(map.current!);
      setClickedLocation({ lng, lat, address });
    });
  }, [initialLocationSet, currentLat, currentLng, zoom, map, markers]);

  useEffect(() => {
    if (
      window.ReactNativeWebView &&
      window.ReactNativeWebView?.injectedObjectJson()
    ) {
      const location = JSON.parse(
        window.ReactNativeWebView?.injectedObjectJson(),
      )?.location;
      if (location && !initialLocationSet) {
        const { latitude, longitude } = location.coords;
        map.current?.setCenter([longitude, latitude]);
        currentLocationMarker.current?.setLngLat([longitude, latitude]);
        setCurrentLat(latitude);
        setCurrentLng(longitude);
        setInitialLocationSet(true);
      }
    }
  }, [initialLocationSet]);

  useEffect(() => {
    map.current?.setZoom(zoom);
  }, [zoom]);

  useEffect(() => {
    if (map.current) {
      map.current.on('move', () => {
        setLng(map.current!.getCenter().lng);
        setLat(map.current!.getCenter().lat);
        setZoom(map.current!.getZoom());
      });
    }
  }, []);

  const saveClickedLocation = () => {
    if (clickedLocation) {
      setMarkers((prevMarkers) => {
        const updatedMarkers = [...prevMarkers, clickedLocation];
        localStorage.setItem('markers', JSON.stringify(updatedMarkers));
        return updatedMarkers;
      });
      setClickedLocation(null);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      <MapboxMapButton
        currentLat={currentLat}
        currentLng={currentLng}
        map={map}
        marker={currentLocationMarker}
        setZoom={setZoom}
        zoom={zoom}
        clickedLocation={clickedLocation}
        saveClickedLocation={saveClickedLocation}
        markers={markers}
      />
      <div ref={mapContainer} className="h-full w-full" />
    </div>
  );
}

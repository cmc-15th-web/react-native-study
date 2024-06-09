import { Map, Marker } from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import { fetchAddress } from '@/services/map.service';
import { useWebview } from '@/hooks/use-webview';
import { MapboxMapButton } from './mapbox-map-button';

import 'mapbox-gl/dist/mapbox-gl.css';

export function MapboxMap() {
  const map = useRef<Map | undefined>(undefined);
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const marker = useRef<mapboxgl.Marker | undefined>(undefined);

  const [initialLocationSet, setInitialLocationSet] = useState<boolean>(false);
  const [currentLng, setCurrentLng] = useState<number>(0);
  const [currentLat, setCurrentLat] = useState<number>(0);
  const [lng, setLng] = useState<number>(-70.9);
  const [lat, setLat] = useState<number>(42.35);
  const [zoom, setZoom] = useState<number>(15);
  const [address, setAddress] = useState<string>('');

  useWebview({ type: 'test', data: { lng, lat, zoom, address } });

  useEffect(() => {
    if (map.current) return;
    map.current = new Map({
      container: mapContainer.current as HTMLElement | string,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [currentLng, currentLat],
      zoom,
    });

    marker.current = new Marker()
      .setLngLat([currentLng, currentLat])
      .addTo(map.current);

    map.current.on('click', async (e) => {
      const { lng, lat } = e.lngLat;
      marker.current?.setLngLat([lng, lat]);
      setCurrentLng(lng);
      setCurrentLat(lat);
      const address = await fetchAddress(lng, lat);
      setAddress(address);
    });
  }, [currentLat, currentLng, zoom, map, marker, address]);

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
        marker.current?.setLngLat([currentLng, currentLat]);
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

  return (
    <div className="h-screen w-screen overflow-hidden">
      <MapboxMapButton
        currentLat={currentLat}
        currentLng={currentLng}
        map={map}
        marker={marker}
        setZoom={setZoom}
        zoom={zoom}
      />
      <div ref={mapContainer} className="h-full w-full" />
    </div>
  );
}

import { Map } from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';

export function MapboxMap() {
  const map = useRef<Map | undefined>(undefined);
  const mapContainer = useRef<HTMLDivElement | null>(null);

  const [lng, setLng] = useState<number>(-70.9);
  const [lat, setLat] = useState<number>(42.35);
  const [zoom, setZoom] = useState<number>(9);

  useEffect(() => {
    if (map.current) return;
    map.current = new Map({
      container: mapContainer.current as HTMLElement | string,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });
  }, [lng, lat]);

  useEffect(() => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: 'test', data: { lng, lat } }),
      );
    }
  }, [lng, lat]);

  useEffect(() => {
    if (
      window.ReactNativeWebView &&
      window.ReactNativeWebView.injectedObjectJson()
    ) {
      const location = JSON.parse(
        window.ReactNativeWebView.injectedObjectJson(),
      ).location;
      const { latitude, longitude } = location.coords;
      map.current?.setCenter({ lat: latitude, lng: longitude });
      setLat(latitude);
      setLng(longitude);
    }
  }, []);

  return (
    <div>
      <Button
        variant="default"
        size="default"
        className="absolute left-4 top-4 z-50"
        onClick={() => location.reload()}
      >
        내 위치로 이동
      </Button>
      <div ref={mapContainer} className="h-screen w-screen" />
    </div>
  );
}

import { Map, Marker } from 'mapbox-gl';
import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';
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

  const fetchAddress = async (lng: number, lat: number) => {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${import.meta.env.VITE_MAPBOX_API_KEY}`,
    );
    const data = await response.json();
    if (data.features && data.features.length > 0) {
      setAddress(data.features[0].place_name);
    }
  };

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

    map.current.on('click', (e) => {
      const { lng, lat } = e.lngLat;
      marker.current?.setLngLat([lng, lat]);
      setCurrentLng(lng);
      setCurrentLat(lat);
      fetchAddress(lng, lat);
    });
  }, [currentLat, currentLng, zoom, map, marker, address]);

  useEffect(() => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: 'test', data: { lng, lat, zoom, address } }),
      );
    }
  }, [lng, lat, zoom, address]);

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
      <div className="absolute left-4 top-4 z-50 flex w-screen items-center justify-between pr-8">
        <Button
          variant="ghost"
          size="default"
          className="bg-[#5061FF] text-white hover:bg-[#5061FF] hover:text-white"
          onClick={() => {
            map.current?.setCenter([currentLng, currentLat]);
            map.current?.setZoom(15);
            marker.current?.setLngLat([currentLng, currentLat]);
          }}
        >
          내 위치로 이동
        </Button>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            className="bg-[#5061FF] text-white hover:bg-[#5061FF] hover:text-white"
            size="sm"
            disabled={zoom >= 18}
            onClick={() => {
              if (zoom >= 18) {
                setZoom(18);
                return;
              }
              setZoom((prevState) => prevState + 1);
            }}
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            className="bg-[#5061FF] text-white hover:bg-[#5061FF] hover:text-white"
            disabled={zoom <= 1}
            size="sm"
            onClick={() => {
              if (zoom <= 1) {
                setZoom(1);
                return;
              }
              setZoom((prevState) => prevState - 1);
            }}
          >
            <Minus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div ref={mapContainer} className="h-full w-full" />
    </div>
  );
}

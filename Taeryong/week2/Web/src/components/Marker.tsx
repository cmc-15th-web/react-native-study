import { useCallback, useEffect, useRef } from "react";

interface MarkerProps {
  latitude: number;
  longitude: number;
}

function Marker({ latitude, longitude }: MarkerProps) {
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  const handleMapLoad = useCallback(
    (map: any) => {
      mapRef.current = map;

      // 초기 마커
      const initialPosition = new window.kakao.maps.LatLng(latitude, longitude);
      const marker = new window.kakao.maps.Marker({
        position: initialPosition,
        map: map,
      });
      markerRef.current = marker;
    },
    [latitude, longitude]
  );

  useEffect(() => {
    if (mapRef.current) {
      const newCenter = new window.kakao.maps.LatLng(latitude, longitude);
      mapRef.current.setCenter(newCenter);

      if (markerRef.current) {
        markerRef.current.setPosition(newCenter);
      } else {
        const newMarker = new window.kakao.maps.Marker({
          position: newCenter,
          map: mapRef.current,
        });
        markerRef.current = newMarker;
      }
    }
  }, [latitude, longitude]);

  return handleMapLoad;
}

export default Marker;

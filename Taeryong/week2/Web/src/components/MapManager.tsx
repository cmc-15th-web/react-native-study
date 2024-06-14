import { useRef, useEffect } from "react";

interface MapManagerProps {
  latitude: number;
  longitude: number;
}

const MapManager = ({ latitude, longitude }: MapManagerProps) => {
  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current) {
      const newCenter = new window.kakao.maps.LatLng(latitude, longitude);
      mapRef.current.setCenter(newCenter);
      markerRef.current.setPosition(newCenter);
    }
  }, [latitude, longitude]);

  return null;
};

export default MapManager;

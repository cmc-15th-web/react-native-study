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

      const imageSize = new window.kakao.maps.Size(46, 46);
      const imageSrc = "./Current.svg";

      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize
      );
      const initialPosition = new window.kakao.maps.LatLng(latitude, longitude);

      const marker = new window.kakao.maps.Marker({
        position: initialPosition,
        map: map,
        image: markerImage,
        zIndex: 1000,
      });

      markerRef.current = marker;
    },
    [latitude, longitude]
  );

  useEffect(() => {
    if (mapRef.current && markerRef.current) {
      const newCenter = new window.kakao.maps.LatLng(latitude, longitude);
      mapRef.current.setCenter(newCenter);
      markerRef.current.setPosition(newCenter);
    }
  }, [latitude, longitude]);

  return handleMapLoad;
}

export default Marker;

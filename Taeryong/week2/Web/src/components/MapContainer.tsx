import { useEffect, useRef } from "react";

interface MapContainerProps {
  latitude: number;
  longitude: number;
  onMapLoad: (map: any) => void;
}

const MapContainer = ({
  latitude,
  longitude,
  onMapLoad,
}: MapContainerProps) => {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.defer = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAOMAP_JAVASCRIPT_APP_KEY
    }&autoload=false`;
    script.onload = () => {
      console.log("Kakao Map script loaded successfully!");
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        mapRef.current = map;
        onMapLoad(map);
      });
    };
    document.head.appendChild(script);
  }, [latitude, longitude, onMapLoad]);

  return <div id="map" style={{ width: "100vw", height: "100vh" }} />;
};

export default MapContainer;

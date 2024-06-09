import { useEffect, useRef } from "react";

const NaverMap = ({ latitude, longitude }: CurrentLocation) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const initMap = (mapRef: React.RefObject<HTMLDivElement>) => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_API_KEY}`;
    script.async = true;
    script.onload = () => {
      if (window.naver && mapRef.current) {
        const mapOption = {
          center: new window.naver.maps.LatLng(latitude, longitude),
          zoom: 15,
        };

        const map = new window.naver.maps.Map(mapRef.current, mapOption);
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  };

  useEffect(() => {
    const cleanMap = initMap(mapRef);
    // alert(`위도: ${latitude}, 경도: ${longitude}`);

    return cleanMap;
  }, []);

  return (
    <div id="map" ref={mapRef} style={{ width: "100%", height: "100vh" }}></div>
  );
};

export default NaverMap;

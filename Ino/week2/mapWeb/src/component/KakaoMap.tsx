import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export default function KakaoMap() {
  const [latitude, setLatitude] = useState<number>(33.5563);
  const [longitude, setLongitude] = useState<number>(126.79581);

  // 현재 위치 받아서 설정
  const getCurrentLocationEvent = (e: MessageEvent) => {
    e.stopPropagation();
    const data = JSON.parse(e.data);
    // e.data형식(lat,long): 37.54465666666667,126.95190333333333
    setLatitude(data.latitude);
    setLongitude(data.longitude);
  };

  useEffect(() => {
    window.addEventListener("message", getCurrentLocationEvent, {
      capture: true,
    });
    return () => window.removeEventListener("message", getCurrentLocationEvent);
  }, []);

  return (
    <Map
      center={{ lat: latitude, lng: longitude }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <MapMarker position={{ lat: latitude, lng: longitude }}></MapMarker>
    </Map>
  );
}

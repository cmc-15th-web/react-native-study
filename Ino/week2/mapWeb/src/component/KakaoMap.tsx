import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "./useKakaoLoader";
import StarIcon from "../assets/Star.svg";
import styles from "./KakaoMap.module.css";

export default function KakaoMap() {
  useKakaoLoader();

  const [type, setType] = useState(0);
  const [view, setView] = useState({
    center: { lat: 33.450701, lng: 126.570667 },
  });
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  // Bridge
  useEffect(() => {
    window.addEventListener("message", getMessage, {
      capture: true,
    });
    return () => window.removeEventListener("message", getMessage);
  }, []);

  const getMessage = (e: MessageEvent) => {
    e.stopPropagation();
    const data = JSON.parse(e.data);

    if (data.name == "CurrentLocation") getCurrentLocationEvent(data);
  };

  // 현재 위치 받아서 중심 이동
  const getCurrentLocationEvent = (data: any) => {
    setLatitude(data.latitude);
    setLongitude(data.longitude);
    setView({ center: { lat: data.latitude, lng: data.longitude } });
    setType(1);
  };

  // 클릭시 마커생성
  const handleMapClick = (lat: number, lng: number) => {
    setLatitude(lat);
    setLongitude(lng);
    setView({ center: { lat: lat, lng: lng } });
    setType(2);
  };

  return (
    <>
      {type == 2 ? (
        <div className={styles.starbtn}>
          <img src={StarIcon} />
        </div>
      ) : (
        <></>
      )}
      <Map
        center={view.center}
        isPanto={true}
        zoomable={true}
        style={{ width: "100vw", height: "100vh" }}
        onClick={(_, MouseEvent) => {
          handleMapClick(
            MouseEvent.latLng.getLat(),
            MouseEvent.latLng.getLng()
          );
        }}
      >
        {type == 1 ? (
          <MapMarker
            position={{ lat: latitude, lng: longitude }}
            image={{
              src: "src/assets/CurrentMarker.svg",
              size: { width: 28, height: 40 },
            }}
          ></MapMarker>
        ) : (
          <></>
        )}
        {type == 2 ? (
          <MapMarker
            position={{ lat: latitude, lng: longitude }}
            image={{
              src: "src/assets/Marker.svg",
              size: { width: 28, height: 40 },
            }}
          ></MapMarker>
        ) : (
          <></>
        )}
      </Map>
    </>
  );
}

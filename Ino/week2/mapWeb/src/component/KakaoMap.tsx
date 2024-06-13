import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "./useKakaoLoader";
import StarButton from "./AddStarBtn";

interface starListItem {
  latitude: number;
  longitude: number;
  address: string;
}

export default function KakaoMap() {
  useKakaoLoader();

  // type : 0(없음), 1(현재위치), 2(마커)
  const [type, setType] = useState(0);
  // 지도의 중심 좌표
  const [view, setView] = useState({
    center: { lat: 33.450701, lng: 126.570667 },
  });

  // 마커의 좌표
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  // 즐겨찾기 리스트
  const [starList, setStarList] = useState<starListItem[]>([]);

  // Bridge
  useEffect(() => {
    window.addEventListener("message", getMessage, {
      capture: true,
    });
    return () => window.removeEventListener("message", getMessage);
  }, []);

  // webview -> web 수신
  const getMessage = (e: MessageEvent) => {
    e.stopPropagation();
    const data = JSON.parse(e.data);

    if (data.name == "CurrentLocation") getCurrentLocationEvent(data);
    else if (data.name == "ShowStarList") showStarList(data);
  };

  // 현재 위치 받아서 중심 이동
  const getCurrentLocationEvent = (data: any) => {
    setLatitude(data.latitude);
    setLongitude(data.longitude);
    setView({ center: { lat: data.latitude, lng: data.longitude } });
    setType(1);
  };

  // 즐겨찾기 목록 받아서 마커 표시
  const showStarList = (data: any) => {
    if (data.visible == false) setStarList([]);
    else setStarList(data.list);
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
        {/* 현재위치 */}
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
        {/* 클릭시 마커 표시 */}
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
        {/* 즐겨찾기한 마커 */}
        {starList.map((star, index) => (
          <MapMarker
            key={`${star.address}-${star.latitude}-${star.longitude}`}
            position={{ lat: star.latitude, lng: star.longitude }}
            image={{
              src: "src/assets/RoundStar.svg",
              size: { width: 20, height: 20 },
            }}
          />
        ))}
      </Map>

      {/* 마커에 대한 즐겨찾기 추가 */}
      {type == 2 ? (
        <StarButton latitude={latitude} longitude={longitude} />
      ) : null}
    </>
  );
}

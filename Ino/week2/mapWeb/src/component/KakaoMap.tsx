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
  const [star, setStar] = useState(false);

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
    setStar(false);
  };

  //즐겨찾기
  const handleStar = () => {
    // 1. 주소 검색
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2RegionCode(longitude, latitude, addStarList);
  };

  const addStarList = (result: any, status: any) => {
    // 주소 검색 후 콜백 함수
    if (status === kakao.maps.services.Status.OK) {
      const addr = result[1].address_name;
      //console.log(addr);

      // 2. 결과를 Webview에 전송
      const message = JSON.stringify({
        name: "AddStar",
        latitude: latitude,
        longitude: longitude,
        address: addr,
      });

      window.ReactNativeWebView.postMessage(message);
      setStar(true);
    } else {
      // 검색 실패 또는 결과없음
      window.ReactNativeWebView.postMessage("NO ADDRESS");
    }
  };

  return (
    <>
      {type == 2 ? (
        <div
          className={star ? styles.isstar : styles.nostar}
          onClick={handleStar}
        >
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

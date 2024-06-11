import React, { useEffect, useRef, useState } from "react";
import MarkerImage from "./assets/Marker.png";
import RoundStar from "./assets/RoundStar.svg";

const { kakao } = window;

function App() {
  const mapRef = useRef();
  // 중심좌표
  const [center, setCenter] = useState<[number, number]>([
    33.450701, 126.570667,
  ]);

  // 핀 생성
  const createPin = (latitude: number, longitude: number) => {
    const imageSrc = MarkerImage; // 마커이미지의 주소입니다
    const imageSize = new kakao.maps.Size(46, 46); // 마커이미지의 크기입니다
    const imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );
    const markerPosition = new kakao.maps.LatLng(latitude, longitude); // 마커가 표시될 위치입니다

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    // 마커가 지도 위에 표시되도록 설정
    marker.setMap(mapRef.current);
  };

  //북마크 생성
  const createBookMark = (latlng: any) => {
    // console.log(latlng.getLat(), latlng.getLng());
    const imageSrc = RoundStar; // 마커이미지의 주소입니다
    const imageSize = new kakao.maps.Size(23, 23); // 마커이미지의 크기입니다
    const imageOption = { offset: new kakao.maps.Point(10, 10) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );
    const markerPosition = new kakao.maps.LatLng(
      latlng.getLat(),
      latlng.getLng()
    );

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    marker.setMap(mapRef.current);
  };

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(center[0], center[1]),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options); // 맵 객체 생성
    mapRef.current = map;

    // 현재 위치에 핀 생성
    createPin(center[0], center[1]);

    //맵 클릭 이벤트 설정
    kakao.maps.event.addListener(map, "click", function (mouseEvent: any) {
      createBookMark(mouseEvent.latLng);
    });
  }, []);

  return (
    <>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
    </>
  );
}

export default App;

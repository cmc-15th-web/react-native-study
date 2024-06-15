import React, { useEffect, useRef, useState } from "react";
import MarkerImage from "./assets/Marker.png";
import RoundGrayStar from "./assets/RoundGrayStar.svg";
import RoundStar from "./assets/RoundStar.svg";

const { kakao, ReactNativeWebView } = window;

function App() {
  const mapRef = useRef();
  // 중심좌표

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

  //색깔별 북마크 이미지 생성 함수
  // 1 -> parameter로 위도,경도 각각 받는 ver
  const BookmarkMarkerWithLatAndLng = (latitude, longitude, typeOfStar) => {
    const imageSrc = typeOfStar; // 마커이미지의 주소
    const imageSize = new kakao.maps.Size(23, 23); // 마커이미지의 크기
    const imageOption = { offset: new kakao.maps.Point(10, 10) }; // 마커이미지의 옵션

    const markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );
    const markerPosition = new kakao.maps.LatLng(latitude, longitude);

    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });
    return marker;
  };

  //2 -> parameter로 latlng객체 받는 함수
  const BookmarkMarker = (latlng, typeOfStar) => {
    const imageSrc = typeOfStar; // 마커이미지의 주소
    const imageSize = new kakao.maps.Size(23, 23); // 마커이미지의 크기
    const imageOption = { offset: new kakao.maps.Point(10, 10) }; // 마커이미지의 옵션

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
    return marker;
  };
  //북마크 생성
  const createBookMark = (latlng: any, detailAddr: string) => {
    // console.log(latlng.getLat(), latlng.getLng());

    const marker = BookmarkMarker(latlng, RoundGrayStar);
    marker.setMap(mapRef.current);

    kakao.maps.event.addListener(marker, "click", () => {
      // alert(`${latlng.getLat()}, ${latlng.getLng()}\n${detailAddr}`);
      if (detailAddr === "") {
        //주소 변환 안되는 좌표는 무시
        alert("유효한 주소로 설정해주세요!.");
        marker.setMap(null);
      } else {
        //북마크 추가
        // RN으로 위도,경도,주소 전달
        const message = {
          type: "newStar",
          id: new Date().getTime(),
          latitude: latlng.getLat(),
          longitude: latlng.getLng(),
          detailAddr: detailAddr,
        };
        ReactNativeWebView.postMessage(JSON.stringify(message));
        alert("북마크 등록 성공!");
        marker.setMap(null);
      }
    });
  };

  const [bookmarkers, setBookmarkers] = useState([]);
  const [bookmarkerShow, setBookmarkerShow] = useState<boolean>(false);
  const showBookmark = () => {
    bookmarkers.map((marker: any) => {
      marker.setMap(mapRef.current);
    });
  };
  const hideBookmark = () => {
    bookmarkers.map((marker: any) => {
      marker.setMap(null);
    });
  };
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options); // 맵 객체 생성
    const geocoder = new kakao.maps.services.Geocoder(); // 좌표 - 주소 변환 객체 생성

    mapRef.current = map;

    function searchDetailAddrFromCoords(coords, callback) {
      // 좌표로 법정동 상세 주소 정보를 요청합니다
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }
    //맵 클릭 이벤트 설정
    kakao.maps.event.addListener(map, "click", function (mouseEvent: any) {
      searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          const detailAddr = !!result[0].road_address
            ? result[0].road_address.address_name
            : "";
          createBookMark(mouseEvent.latLng, detailAddr);
        }
      });
    });

    // RN -> webview data flow
    window.addEventListener("message", (e: any) => {
      const data = JSON.parse(e.data);
      if (data.type === "init") {
        // 맵 이동
        map.setCenter(new kakao.maps.LatLng(data.latitude, data.longitude));
        //핀 생성
        createPin(data.latitude, data.longitude);
      }
      if (data.type === "stars") {
        // stars로 받아오는 배열을 bookmarkers에 상태값으로 저장
        if (data.data.length === 0) {
          //지도에 북마크 표시 x
          setBookmarkerShow(false);
        } else {
          // hideBookmark();
          // setBookmarkers([]);
          const newMarkers: any = [];
          data.data.map((star) => {
            const marker = BookmarkMarkerWithLatAndLng(
              star.latitude,
              star.longitude,
              RoundStar
            );
            newMarkers.push(marker);
          });

          // 북마크 업데이트
          setBookmarkers(newMarkers);
          //markers를 지도에 표시
          setBookmarkerShow(true);
        }
      }
    });

    const message = {
      type: "webAppMount",
    };
    // ReactNativeWebView.postMessage("webAppMount");
    ReactNativeWebView.postMessage(JSON.stringify(message));
  }, []);

  useEffect(() => {
    // alert(`북마크 데이터 ${bookmarkers.length}`);
    if (bookmarkerShow) {
      showBookmark();
    } else {
      hideBookmark();
    }
  }, [bookmarkers, bookmarkerShow]);

  return (
    <>
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
    </>
  );
}

export default App;

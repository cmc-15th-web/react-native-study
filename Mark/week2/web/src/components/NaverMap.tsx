import { useEffect, useRef, useState } from "react";
import { StarSvg } from "../assets/StarSvg";
import { Palette } from "../constants/palette";
import { BtnStar, Map } from "./NaverMap.style";
import { useStore } from "../store/store";

const NaverMap = ({ latitude, longitude }: CurrentLocation) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<naver.maps.Marker | null>(null);
  const [mapInstance, setMapInstance] = useState<naver.maps.Map | null>(null);
  const [isStarred, setIsStarred] = useState<boolean>(false);
  const markerList = useStore((state) => state.markerList);
  const starAddressList = useStore((state) => state.starAddressList);
  const { setMarkerList, setStarAddressList } = useStore();

  /* 현재 위치 가져와서 지도를 초기화시키는 메소드 */
  const initMap = () => {
    if (window.naver && mapRef.current) {
      const mapOption = {
        center: new window.naver.maps.LatLng(latitude, longitude),
        zoom: 15,
      };

      const map = new window.naver.maps.Map(mapRef.current, mapOption);
      setMapInstance(map);

      const currentMarker = new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(latitude, longitude),
        map: map,
        icon: {
          url: "/assets/current.svg",
        },
      });
    }
  };

  useEffect(() => {
    initMap();
  }, [latitude, longitude]);

  /* 지도 클릭 시 마커 생성 이벤트 */
  useEffect(() => {
    if (mapInstance) {
      const handleClick = (e: any) => {
        if (selected) {
          selected.setMap(null);
        }
        const newMarker = new window.naver.maps.Marker({
          position: e.coord,
          map: mapInstance,
          icon: {
            url: "/assets/marker.svg",
          },
        });

        setSelected(newMarker);
      };

      const listener = window.naver.maps.Event.addListener(
        mapInstance,
        "click",
        handleClick
      );
      return () => {
        window.naver.maps.Event.removeListener(listener);
      };
    }
  }, [selected, mapInstance]);

  /* 현재 선택한 좌표의 즐겨찾기 여부 판단해서 즐겨찾기 버튼 토글 */
  useEffect(() => {
    let check = false;
    if (selected) {
      check = markerList.some((marker) => {
        const markerPos = marker.marker.getPosition();
        const selectedPos = selected!.getPosition();
        return markerPos.y === selectedPos.y && markerPos.x === selectedPos.x;
      });
    }
    setIsStarred(check);
  }, [selected, markerList]);

  /* 즐겨찾기 목록 업데이트 시 RN에 목록 전달 */
  useEffect(() => {
    if (window.ReactNativeWebView && window.ReactNativeWebView.postMessage) {
      const message = {
        type: "star",
        payload: {
          starAddressList: starAddressList,
        },
      };
      window.ReactNativeWebView.postMessage(JSON.stringify(message));
    }
  }, [starAddressList]);

  /* 즐겨찾기 해제, 생성 */
  const handleStar = () => {
    if (isStarred) {
      // 즐겨찾기 마커 해제
      const selectedPos = selected!.getPosition();
      const newStarList = markerList.filter((marker) => {
        const markerPos = marker.marker.getPosition();
        const isSamePosition =
          markerPos.y === selectedPos.y && markerPos.x === selectedPos.x;
        if (isSamePosition) {
          marker.marker.setMap(null);
        }
        return !isSamePosition;
      });
      setMarkerList(newStarList);

      // 주소 비교해서 목록에서 제거
      naver.maps.Service.reverseGeocode(
        {
          coords: selected!.getPosition(),
          orders: [
            naver.maps.Service.OrderType.ADDR,
            naver.maps.Service.OrderType.ROAD_ADDR,
          ].join(","),
        },
        function (status, response) {
          if (status === naver.maps.Service.Status.OK) {
            const address =
              response.v2.address.roadAddress ||
              response.v2.address.jibunAddress;
            const newList = starAddressList.filter(
              (item) => item.addr !== address
            );
            setStarAddressList(newList);
          }
        }
      );
    } else {
      // 즐겨찾기 마커 추가
      const newStar = new window.naver.maps.Marker({
        position: selected!.getPosition(),
        map: mapInstance!,
        icon: {
          url: "/assets/star.svg",
        },
      });

      const newStarId = new Date().getTime();
      const newList = [...markerList, { marker: newStar, id: newStarId }];
      setMarkerList(newList);

      // 주소변환 후 목록에 추가
      naver.maps.Service.reverseGeocode(
        {
          coords: selected!.getPosition(),
          orders: [
            naver.maps.Service.OrderType.ADDR,
            naver.maps.Service.OrderType.ROAD_ADDR,
          ].join(","),
        },
        function (status, response) {
          if (status === naver.maps.Service.Status.OK) {
            const address =
              response.v2.address.roadAddress ||
              response.v2.address.jibunAddress;
            const newList = [
              ...starAddressList,
              { addr: address, markerId: newStarId },
            ];
            setStarAddressList(newList);
          }
        }
      );
    }
  };

  return (
    <Map id="map" ref={mapRef}>
      {selected ? (
        <BtnStar id="btn-star" onClick={handleStar}>
          <StarSvg
            width="30"
            height="30"
            fill={isStarred ? Palette.Blue600 : Palette.Gray600}
          />
        </BtnStar>
      ) : null}
    </Map>
  );
};

export default NaverMap;

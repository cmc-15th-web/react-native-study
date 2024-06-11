import { useEffect, useRef, useState } from "react";
import { StarSvg } from "../assets/StarSvg";
import { Palette } from "../constants/palette";
import { BtnStar, Map } from "./NaverMap.style";

const NaverMap = ({ latitude, longitude }: CurrentLocation) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<naver.maps.Marker | null>(null);
  const [mapInstance, setMapInstance] = useState<naver.maps.Map | null>(null);
  const [starList, setStarList] = useState<naver.maps.Marker[]>([]);
  const [isStarred, setIsStarred] = useState<boolean>(false);

  const initMap = () => {
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
        setMapInstance(map);

        const currentMarker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(latitude, longitude),
          map: map,
          icon: {
            url: '../assets/marker.svg',
          }
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  };

  useEffect(() => {
    initMap();
    // alert(`위도: ${latitude}, 경도: ${longitude}`);
  }, [latitude, longitude]);

  useEffect(() => {
    if (mapInstance) {
      const handleClick = (e: any) => {
        if (selected) {
          selected.setMap(null);
        }
        const newMarker = new window.naver.maps.Marker({
          position: e.coord,
          map: mapInstance,
        });

        setSelected(newMarker);
      }

      const listener = window.naver.maps.Event.addListener(mapInstance, "click", handleClick);
      return () => {
        window.naver.maps.Event.removeListener(listener);
      };
    }
  }, [selected, mapInstance]);

  useEffect(() => {
    let check = false;
    if (selected) {
      check = starList.some((marker) => {
        const markerPos = marker.getPosition();
        const selectedPos = selected!.getPosition();
        return markerPos.y === selectedPos.y && markerPos.x === selectedPos.x;
      });
    }
    setIsStarred(check);
  }, [selected, starList]);

  const handleStar = () => {
    if (isStarred) {
      // 즐겨찾기 해제
      const selectedPos = selected!.getPosition();
      const newStarList = starList.filter((marker) => {
        const markerPos = marker.getPosition();
        const isSamePosition = markerPos.y === selectedPos.y && markerPos.x === selectedPos.x;
        if (isSamePosition) {
          marker.setMap(null);
        }
        return !isSamePosition;
      });
      setStarList(newStarList);
    } else {
      // 즐겨찾기 추가
      const newStar = new window.naver.maps.Marker({
        position: selected!.getPosition(),
        map: mapInstance!,
        icon: {
          url: "/assets/star.svg",
        },
      });
      setStarList((prevList) => [...prevList, newStar]);
    }
  };

  return (
    <Map id="map" ref={mapRef}>
      {selected ? (
        <BtnStar id="btn-star" onClick={handleStar}>
          <StarSvg width="30" height="30" fill={isStarred ? Palette.Blue600 : Palette.Gray600} />
        </BtnStar>
      ) : null}
    </Map>
  );
};

export default NaverMap;

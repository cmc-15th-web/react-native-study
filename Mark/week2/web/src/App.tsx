import { useEffect, useState } from "react";
import NaverMap from "./components/NaverMap";
import { useStore } from "./store/store";

function App() {
  const DefaultLocation: CurrentLocation = {
    latitude: 37.5665,
    longitude: 126.978,
  };
  const [currentLocation, setCurrentLocation] =
    useState<CurrentLocation>(DefaultLocation);

  const { starList, setStarList, starAddressList, setStarAddressList } =
    useStore();

  useEffect(() => {
    const handleMessage = (event: any) => {
      const message = JSON.parse(event.data);
      // alert(
      //   message.payload.latitude.toString() +
      //     message.payload.longitude.toString()
      // );
      if (message.type === "location") {
        // 애뮬레이터 테스트의 경우 디폴트 위치를 사용하기 위해 주석 처리
        // setCurrentLocation({
        //   latitude: message.payload.latitude,
        //   longitude: message.payload.longitude,
        // });
        return;
      }
      if (message.type === "removeStar") {
        const removedAddr = message.payload.removedAddr;
        const newList = starAddressList.filter((addr) => addr !== removedAddr);
        setStarAddressList(newList);
        naver.maps.Service.geocode(
          {
            query: removedAddr,
          },
          function (status, response) {
            if (status === naver.maps.Service.Status.OK) {
              const { x, y } = response.v2.addresses[0];
              const position = new naver.maps.LatLng(+y, +x);
              starList.forEach((marker) => {
                const markerPos = marker.getPosition();
                if (markerPos.y === +y && markerPos.x === +x) {
                  const newList = starList.filter((item) => item !== marker);
                  setStarList(newList);
                  marker.setMap(null);
                }
              });
            }
          }
        );
      }
    };

    // 안드로이드의 경우 document, ios의 경우 window에 이벤트리스너 추가
    if (navigator.userAgent.match(/Android/i)) {
      document.addEventListener("message", handleMessage);
    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      window.addEventListener("message", handleMessage);
    }

    return () => {
      if (navigator.userAgent.match(/Android/i)) {
        document.removeEventListener("message", handleMessage);
      } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        window.removeEventListener("message", handleMessage);
      }
    };
  }, []);
  return (
    <NaverMap
      latitude={currentLocation.latitude}
      longitude={currentLocation.longitude}
    />
  );
}

export default App;

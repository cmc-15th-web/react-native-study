import { useEffect, useState } from "react";
import NaverMap from "./components/NaverMap";
import { useStore } from "./store/store";

function App() {
  const { setMarkerList, setStarAddressList } = useStore();
  const markerList = useStore(state => state.markerList);
  const starAddressList = useStore(state => state.starAddressList);
  
  const DefaultLocation: CurrentLocation = {
    latitude: 37.5665,
    longitude: 126.978,
  };
  const [currentLocation, setCurrentLocation] =
    useState<CurrentLocation>(DefaultLocation);

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
        const removedItem: Star = message.payload.removedItem;
        const newList = starAddressList.filter((item) => item.markerId !== removedItem.markerId);
        setStarAddressList(newList);

        markerList.forEach((item) => {
          if (item.id === removedItem.markerId) {
            item.marker.setMap(null);
            return;
          }
        })
        const filtered = markerList.filter((item) => item.id !== removedItem.markerId);
        setMarkerList(filtered);
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
  }, [markerList, starAddressList]);
  return (
    <NaverMap
      latitude={currentLocation.latitude}
      longitude={currentLocation.longitude}
    />
  );
}

export default App;

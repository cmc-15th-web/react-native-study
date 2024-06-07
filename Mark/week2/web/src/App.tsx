import { useEffect, useState } from "react";
import NaverMap from "./components/NaverMap";

function App() {
  const DefaultLocation: CurrentLocation = {
    latitude: 37.5665,
    longitude: 126.978,
  }
  const [currentLocation, setCurrentLocation] = useState<CurrentLocation>(DefaultLocation);

  useEffect(() => {
    const handleMessage = (event: any) => {
      const message = JSON.parse(event.data);
      if (message.type === 'location') {
        setCurrentLocation({ latitude: message.payload.latitude, longitude: message.payload.longitude });
      }
    };

    // 안드로이드의 경우 document, ios의 경우 window에 이벤트리스너 추가
    if (navigator.userAgent.match(/Android/i)) {
      document.addEventListener("message", handleMessage);
      alert('android');

    } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
      window.addEventListener("message", handleMessage);
      alert('ios');
    }

    return () => {
      if (navigator.userAgent.match(/Android/i)) {
        document.removeEventListener("message", handleMessage);
      } else if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
        window.removeEventListener("message", handleMessage);
      }
    };
  }, []);
  return <NaverMap latitude={currentLocation.latitude} longitude={currentLocation.longitude}/>;
}

export default App;

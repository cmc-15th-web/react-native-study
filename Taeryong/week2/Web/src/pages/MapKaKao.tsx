import { useEffect } from "react";

function MapKaKao() {
  useEffect(() => {
    const script = document.createElement("script");
    script.defer = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAOMAP_JAVASCRIPT_APP_KEY
    }&autoload=false`;
    script.onload = () => {
      console.log("Kakao Map script loaded successfully!");
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        console.log(
          "🚀 ~ file: MapKaKao.tsx:18 ~ window.kakao.maps.load ~ map:",
          map
        );
      });
    };
    document.head.appendChild(script);
  }, []);

  return <div id="map" style={{ width: "100vw", height: "100vh" }} />;
}

export default MapKaKao;

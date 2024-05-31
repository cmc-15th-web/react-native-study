import React, { useEffect } from "react";

declare global {
  interface Window {
    naver: any;
  }
}

const NaverMap: React.FC = () => {
  useEffect(() => {
    if (window.naver && window.naver.maps) {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10,
      };
      new window.naver.maps.Map("map", mapOptions);
    }
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
};

export default NaverMap;

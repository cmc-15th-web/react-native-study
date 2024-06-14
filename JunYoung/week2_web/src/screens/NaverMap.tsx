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
        center: new window.naver.maps.LatLng(37.55025, 127.073146),
        zoom: 16,
      };
      new window.naver.maps.Map("map", mapOptions);
    }
  }, []);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "100vh", backgroundColor: "beige" }}
    ></div>
  );
};

export default NaverMap;

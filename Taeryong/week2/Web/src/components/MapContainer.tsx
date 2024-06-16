import { useEffect, useRef, useState } from "react";
import styles from "./MapContainer.module.css";
import ConfirmButton from "./ConfirmButton"; 

interface MapContainerProps {
  latitude: number;
  longitude: number;
  onMapLoad: (map: any) => void;
}

const MapContainer = ({
  latitude,
  longitude,
  onMapLoad,
}: MapContainerProps) => {
  const mapRef = useRef<any>(null);
  const [clickedLatLng, setClickedLatLng] = useState<{
    lat: number;
    lng: number;
  }>({ lat: latitude, lng: longitude });
  const [address, setAddress] = useState<string | null>(null);
  const [, setStarMarkers] = useState<any[]>([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.defer = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAOMAP_JAVASCRIPT_APP_KEY
    }&libraries=services&autoload=false`;
    script.onload = () => {
      console.log("Kakao Map script loaded successfully!");
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        mapRef.current = map;
        onMapLoad(map);

        const marker = new kakao.maps.Marker({
          position: map.getCenter(),
        });
        marker.setMap(map);

        kakao.maps.event.addListener(map, "click", function (mouseEvent: any) {
          const latlng = mouseEvent.latLng;
          marker.setPosition(latlng);
          setClickedLatLng({ lat: latlng.getLat(), lng: latlng.getLng() });

          const geocoder = new kakao.maps.services.Geocoder();
          geocoder.coord2Address(
            latlng.getLng(),
            latlng.getLat(),
            (result, status) => {
              if (status === kakao.maps.services.Status.OK) {
                const detailAddr = result[0].road_address
                  ? `${result[0].road_address.address_name}`
                  : `${result[0].address.address_name}`;
                setAddress(detailAddr);
              }
            }
          );
        });
      });
    };
    document.head.appendChild(script);
  }, [latitude, longitude, onMapLoad]);

  return (
    <div className={styles.mapContainer}>
      <div id="map" className={styles.map} />
      <ConfirmButton
        mapRef={mapRef}
        address={address}
        clickedLatLng={clickedLatLng}
        setStarMarkers={setStarMarkers}
      />
    </div>
  );
};

export default MapContainer;

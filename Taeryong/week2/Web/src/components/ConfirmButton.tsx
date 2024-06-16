import React from "react";
import styles from "./MapContainer.module.css";

interface ConfirmButtonProps {
  mapRef: any;
  address: string | null;
  clickedLatLng: { lat: number; lng: number };
  setStarMarkers: React.Dispatch<React.SetStateAction<any[]>>;
}

const ConfirmButton = ({
  mapRef,
  address,
  clickedLatLng,
  setStarMarkers,
}: ConfirmButtonProps) => {
  const handleConfirm = () => {
    if (address && mapRef.current) {
      const newStarMarker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(clickedLatLng.lat, clickedLatLng.lng),
        image: new kakao.maps.MarkerImage(
          "./Star.svg",
          new kakao.maps.Size(24, 24),
          {
            alt: "Star",
          }
        ),
      });
      newStarMarker.setMap(mapRef.current);
      setStarMarkers((prevMarkers) => [...prevMarkers, newStarMarker]);

      if (window.ReactNativeWebView) {
        window.ReactNativeWebView.postMessage(
          JSON.stringify({
            address: address,
          })
        );
      }
    }
  };

  return (
    <button onClick={handleConfirm} className={styles.confirmButton}>
      <img src="./Star.svg" alt="Star" />
      즐찾추가
    </button>
  );
};

export default ConfirmButton;

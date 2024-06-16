import { useEffect } from "react";
import { getCurrentLocationEvent } from "./MapUtil";

interface LocationUpdaterProps {
  setLatitude: React.Dispatch<React.SetStateAction<number>>;
  setLongitude: React.Dispatch<React.SetStateAction<number>>;
}

const MapLocation = ({ setLatitude, setLongitude }: LocationUpdaterProps) => {
  useEffect(() => {
    const handleLocationEvent = getCurrentLocationEvent(
      setLatitude,
      setLongitude
    );
    window.addEventListener("message", handleLocationEvent);

    return () => {
      window.removeEventListener("message", handleLocationEvent);
    };
  }, [setLatitude, setLongitude]);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "40px",
        left: "15px",
        zIndex: 1000,
        cursor: "pointer",
        width: "40px",
        height: "40px",
        backgroundColor: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <img src="./Location.svg" alt="현재 위치" />
    </div>
  );
};

export default MapLocation;

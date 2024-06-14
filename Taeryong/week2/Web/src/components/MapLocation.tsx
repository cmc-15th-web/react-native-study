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

  return null;
};

export default MapLocation;

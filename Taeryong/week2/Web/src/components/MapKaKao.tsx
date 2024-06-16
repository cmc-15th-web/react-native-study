import { useState } from "react";
import MapContainer from "./MapContainer";
import MapLocation from "./MapLocation";
import Marker from "./Marker";

function MapKaKao() {
  const [latitude, setLatitude] = useState<number>(33.450701);
  const [longitude, setLongitude] = useState<number>(126.570667);

  const handleMapLoad = Marker({ latitude, longitude });

  return (
    <>
      <MapContainer
        latitude={latitude}
        longitude={longitude}
        onMapLoad={handleMapLoad}
      />
      <MapLocation setLatitude={setLatitude} setLongitude={setLongitude} />
    </>
  );
}

export default MapKaKao;

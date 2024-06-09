import { Minus, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Map, Marker } from 'mapbox-gl';

type MapboxMapButtonProps = {
  map: React.MutableRefObject<Map | undefined>;
  marker: React.MutableRefObject<Marker | undefined>;
  currentLng: number;
  currentLat: number;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
};

export function MapboxMapButton({
  map,
  marker,
  currentLat,
  currentLng,
  zoom,
  setZoom,
}: MapboxMapButtonProps) {
  return (
    <div className="absolute left-4 top-4 z-50 flex w-screen items-center justify-between pr-8">
      <Button
        variant="ghost"
        size="default"
        className="bg-[#5061FF] text-white hover:bg-[#5061FF] hover:text-white"
        onClick={() => {
          map.current?.setCenter([currentLng, currentLat]);
          map.current?.setZoom(15);
          marker.current?.setLngLat([currentLng, currentLat]);
        }}
      >
        내 위치로 이동
      </Button>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          className="bg-[#5061FF] text-white hover:bg-[#5061FF] hover:text-white"
          size="sm"
          disabled={zoom >= 18}
          onClick={() => {
            if (zoom >= 18) {
              setZoom(18);
              return;
            }
            setZoom((prevState) => prevState + 1);
          }}
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          className="bg-[#5061FF] text-white hover:bg-[#5061FF] hover:text-white"
          disabled={zoom <= 1}
          size="sm"
          onClick={() => {
            if (zoom <= 1) {
              setZoom(1);
              return;
            }
            setZoom((prevState) => prevState - 1);
          }}
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

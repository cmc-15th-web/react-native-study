import { Minus, Plus } from 'lucide-react';
import { StarIcon } from './ui/icons';
import { Button } from './ui/button';
import { Map, Marker } from 'mapbox-gl';
import { cn } from '@/lib/utils';
import { BookmarkedList } from './bookmarked-list';

type MapboxMapButtonProps = {
  map: React.MutableRefObject<Map | undefined>;
  marker: React.MutableRefObject<Marker | undefined>;
  currentLng: number;
  currentLat: number;
  zoom: number;
  clickedLocation: {
    lng: number;
    lat: number;
    address: string;
  } | null;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  saveClickedLocation: () => void;
  markers: {
    lng: number;
    lat: number;
    address: string;
  }[];
};

export function MapboxMapButton({
  map,
  marker,
  currentLat,
  currentLng,
  zoom,
  markers,
  clickedLocation,
  setZoom,
  saveClickedLocation,
}: MapboxMapButtonProps) {
  return (
    <div className="absolute left-4 top-4 z-50 flex w-screen items-center justify-between pr-8">
      <div className="flex items-center gap-2">
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
        <BookmarkedList />
      </div>
      <div className="flex items-center gap-1.5">
        <StarIcon
          className={cn(
            'h-8 w-8 cursor-pointer rounded-full',
            markers.find(
              (marker) =>
                marker.lat === clickedLocation?.lat &&
                marker.lng === clickedLocation?.lng,
            )
              ? 'bg-[#5061FF]'
              : 'bg-gray-400',
          )}
          innerClassName="fill-white"
          onClick={saveClickedLocation}
        />
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

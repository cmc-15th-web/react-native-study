import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export function BookmarkedList() {
  const [markers, setMarkers] = useState<
    Array<{ lng: number; lat: number; address: string }>
  >([]);

  useEffect(() => {
    const savedMarkers = localStorage.getItem('markers');
    if (savedMarkers) {
      setMarkers(JSON.parse(savedMarkers));
    }
  }, []);

  return (
    <Drawer>
      <DrawerTrigger>
        <Button variant="outline">즐겨찾기</Button>
      </DrawerTrigger>
      <DrawerContent className="h-[60vh] p-6">
        {markers && markers.length > 0
          ? markers.map((marker) => (
              <div
                key={`${marker.lat} - ${marker.lng}`}
                className="flex h-10 w-full items-center"
              >
                {marker.address}
              </div>
            ))
          : null}
      </DrawerContent>
    </Drawer>
  );
}

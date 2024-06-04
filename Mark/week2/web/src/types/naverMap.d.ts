declare namespace naver.maps {
  class LatLng {
    constructor(lat: number, lng: number);
  }

  class Map {
    constructor(element: HTMLElement, options: MapOptions);
  }

  interface MapOptions {
    center: LatLng;
    zoom: number;
  }
}
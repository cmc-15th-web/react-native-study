type CurrentLocation = {
  latitude: number;
  longitude: number;
};

type SvgProps = {
  width: string;
  height: string;
  fill: string;
};

type Star = {
  addr: string;
  markerId: number;
}

type Marker = {
  marker: naver.maps.Marker;
  id: number;
}
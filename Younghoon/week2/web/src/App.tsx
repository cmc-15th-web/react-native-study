import mapboxgl from 'mapbox-gl';
import { MapboxMap } from './components/mapbox-map';

export default function App() {
  mapboxgl.accessToken = `${import.meta.env.VITE_MAPBOX_API_KEY}`;

  return <MapboxMap />;
}

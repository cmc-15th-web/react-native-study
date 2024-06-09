export async function fetchAddress(lng: number, lat: number): Promise<string> {
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${import.meta.env.VITE_MAPBOX_API_KEY}`,
  );
  const data = await response.json();
  if (data.features && data.features.length > 0) {
    return data.features[0].place_name;
  }
  return '주소를 찾을 수 없습니다';
}

export const fetchAddress = async (lng: number, lat: number) => {
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${import.meta.env.VITE_MAPBOX_API_KEY}`,
  );
  const data = await response.json();
  if (data.features && data.features.length > 0) {
    return data.features[0].place_name;
  }

  return null;
};

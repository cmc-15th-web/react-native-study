import { Dispatch, SetStateAction } from 'react';

export const getMessageFromRN = (
  setCurrentLocation: Dispatch<
    SetStateAction<{ latitude: number; longitude: number }>
  >,
  setFavList: Dispatch<SetStateAction<any[]>>
) => {
  if (!window.ReactNativeWebView) return;
  const handleMessage = (e: MessageEvent<any>) => {
    try {
      const response = JSON.parse(e.data);
      if (response.type === 'location') {
        setCurrentLocation({
          latitude: response.latitude,
          longitude: response.longitude,
        });
      }
      if (response.type === 'favList') {
        setFavList(response.favList);
      }
    } catch (error) {
      console.error('Error parsing message data:', error);
    }
  };
  window.addEventListener('message', handleMessage);
};

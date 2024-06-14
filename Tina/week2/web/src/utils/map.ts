import { Dispatch, SetStateAction } from 'react';

export const getMessageFromRN = (
  setCurrentLocation: Dispatch<
    SetStateAction<{ latitude: number; longitude: number }>
  >
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
    } catch (error) {
      console.error('Error parsing message data:', error);
    }
  };
  window.addEventListener('message', handleMessage);
};

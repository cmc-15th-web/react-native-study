export const getCurrentLocationEvent = (
  setLatitude: React.Dispatch<React.SetStateAction<number>>,
  setLongitude: React.Dispatch<React.SetStateAction<number>>
) => {
  console.log("getCurrentLocationEvent called");
  return (e: MessageEvent) => {
    console.log("Message event received:", e);
    e.stopPropagation();
    try {
      console.log("Data:", e.data);
      const data = JSON.parse(e.data);
      console.log("Parsed data:", data);
      if (data.type === "location") {
        setLatitude(data.latitude);
        setLongitude(data.longitude);
      }
    } catch (error) {
      console.error("Error parsing message data:", error);
    }
  };
};

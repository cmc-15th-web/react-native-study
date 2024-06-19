import { useEffect, useState } from "react";
import * as Network from "expo-network";

export const useNetwork = () => {
  const [localIP, setLocalIP] = useState<string | null>(null);

  useEffect(() => {
    const getLocalIP = async () => {
      try {
        const ip = await Network.getIpAddressAsync();
        setLocalIP(ip);
      } catch (error) {
        console.error("Unable to get IP address", error);
      }
    };

    getLocalIP();
  }, []);

  return { localIP };
};

import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: import.meta.env.VITE_APP_KAKAO_MAP_KEY,
    libraries: ["clusterer", "drawing", "services"],
  });
}

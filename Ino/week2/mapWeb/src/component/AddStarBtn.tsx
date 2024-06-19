import React, { useEffect, useState } from "react";
import StarIcon from "../assets/Star.svg";
import styles from "./AddStarBtn.module.css";

interface StarButtonProps {
  latitude: number;
  longitude: number;
}

const StarButton: React.FC<StarButtonProps> = ({ latitude, longitude }) => {
  const [isStar, setIsStar] = useState(false);

  useEffect(() => setIsStar(false), [latitude, longitude]);

  //즐겨찾기 추가
  const handleStar = () => {
    // 1. 주소 검색
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2RegionCode(longitude, latitude, addStarList);
  };

  const addStarList = (result: any, status: any) => {
    // 주소 검색 후 콜백 함수
    if (status === kakao.maps.services.Status.OK) {
      const addr = result[1].address_name;
      //console.log(addr);

      // 2. 결과를 Webview에 전송
      const message = JSON.stringify({
        name: "AddStar",
        latitude: latitude,
        longitude: longitude,
        address: addr,
      });

      window.ReactNativeWebView.postMessage(message);
      setIsStar(true);
    } else {
      // 검색 실패 또는 결과없음
      window.ReactNativeWebView.postMessage("NO ADDRESS");
    }
  };

  return (
    <div
      className={isStar ? styles.isstar : styles.nostar}
      onClick={handleStar}
    >
      <img src={StarIcon} alt="Add Star Icon" />
    </div>
  );
};

export default StarButton;

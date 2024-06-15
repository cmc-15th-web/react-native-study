import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 환경 변수에서 클라이언트 ID 읽기
const ncpClientId = process.env.REACT_APP_CLIENT_ID;

// 네이버 맵 스크립트를 동적으로 추가
const script = document.createElement("script");
script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${ncpClientId}`;
script.async = true;
document.head.appendChild(script);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

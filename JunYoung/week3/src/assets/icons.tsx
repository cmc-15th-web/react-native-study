import React from "react";
import Svg, { Path } from "react-native-svg";

export const HomeBtn = ({ fill = "black", width = 28, height = 28 }) => (
  <Svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <Path
      d="M5 19V10.308C5 10.052 5.05733 9.80966 5.172 9.58099C5.286 9.35232 5.444 9.16366 5.646 9.01499L11.031 4.93799C11.3123 4.72266 11.6343 4.61499 11.997 4.61499C12.359 4.61499 12.683 4.72266 12.969 4.93799L18.354 9.01499C18.556 9.16366 18.714 9.35232 18.828 9.58099C18.9427 9.80966 19 10.052 19 10.308V19C19 19.268 18.9003 19.5017 18.701 19.701C18.501 19.9003 18.2673 20 18 20H14.615C14.3863 20 14.1947 19.9227 14.04 19.768C13.8853 19.6133 13.808 19.4213 13.808 19.192V14.423C13.808 14.1943 13.7303 14.0027 13.575 13.848C13.4203 13.6927 13.2287 13.615 13 13.615H11C10.7713 13.615 10.5797 13.6927 10.425 13.848C10.2697 14.0027 10.192 14.1943 10.192 14.423V19.193C10.192 19.4217 10.1147 19.6133 9.96 19.768C9.80533 19.9227 9.61367 20 9.385 20H6C5.732 20 5.49833 19.9003 5.299 19.701C5.09967 19.501 5 19.2673 5 19Z"
      fill={fill}
    />
  </Svg>
);

export const SplashBtn = ({ fill = "black", width = 24, height = 24 }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M17.9041 21.0274C19.9161 20.1208 21.5609 18.7251 22.6264 17.0205C23.6919 15.3159 24.1292 13.3804 23.882 11.4636C22.2539 12.5989 20.7247 13.8321 19.3064 15.1535C16.8636 17.4235 14.8749 19.8105 13.3994 22.1364C14.9758 22.0357 16.51 21.658 17.9041 21.0274ZM2.06777 18.4645C0.483427 20.2844 -0.742665 22.9644 0.527174 23.7714C2.31843 24.9114 10.4636 21.7584 16.9712 14.9665C23.4789 8.17459 25.6319 1.16967 22.7399 0.093684C21.405 -0.40331 18.6182 1.17667 17.0173 2.48766L17.709 2.80165C19.2839 1.94966 21.9087 1.06867 19.4813 4.77763L19.4459 4.83063C17.7086 3.71439 15.6293 3.04282 13.4546 2.89554C11.2798 2.74826 9.10066 3.13143 7.1755 3.99964C1.61493 6.50561 -0.490825 12.3495 2.47213 17.0515C3.14688 18.1248 4.05598 19.0803 5.15133 19.8675C0.943359 22.6174 1.97082 20.2274 2.55844 19.0515L2.06777 18.4645Z"
      fill={fill}
    />
  </Svg>
);

export const ThemeBtn = ({ fill = "black", width = 28, height = 28 }) => (
  <Svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <Path
      d="M8.954 20H5C4.71933 20 4.48267 19.9033 4.29 19.71C4.09667 19.518 4 19.2813 4 19V15.046C4.56933 14.8793 5.045 14.5643 5.427 14.101C5.809 13.6377 6 13.104 6 12.5C6 11.896 5.809 11.3623 5.427 10.899C5.045 10.4357 4.56933 10.1207 4 9.95399V5.99999C4 5.71932 4.09667 5.48266 4.29 5.28999C4.482 5.09666 4.71867 4.99999 5 4.99999H9C9.18 4.42799 9.49533 3.97099 9.946 3.62899C10.3973 3.28632 10.9153 3.11499 11.5 3.11499C12.0847 3.11499 12.6027 3.28632 13.054 3.62899C13.5047 3.97099 13.82 4.42799 14 4.99999H18C18.2807 4.99999 18.5173 5.09666 18.71 5.28999C18.9033 5.48266 19 5.71932 19 5.99999V9.99999C19.572 10.18 20.029 10.4953 20.371 10.946C20.7137 11.3973 20.885 11.9153 20.885 12.5C20.885 13.0847 20.7137 13.6027 20.371 14.054C20.029 14.5047 19.572 14.82 19 15V19C19 19.2807 18.9033 19.5173 18.71 19.71C18.5173 19.9033 18.2807 20 18 20H14.046C13.866 19.3973 13.5427 18.9133 13.076 18.548C12.6087 18.1827 12.0833 18 11.5 18C10.9167 18 10.3913 18.1827 9.924 18.548C9.45733 18.9133 9.134 19.3973 8.954 20Z"
      fill={fill}
    />
  </Svg>
);

export const PLusBtn = ({ fill = "#A45CFF", width = 24, height = 24 }) => (
  <Svg width="50" height="50" viewBox="0 0 46 46" fill="none">
    <Path
      d="M21.75 34.25H24.25V24.25H34.25V21.75H24.25V11.75H21.75V21.75H11.75V24.25H21.75V34.25ZM23.0075 45.5C19.8975 45.5 16.9725 44.91 14.2325 43.73C11.4942 42.5483 9.11167 40.945 7.085 38.92C5.05833 36.8967 3.45417 34.5167 2.2725 31.78C1.09083 29.0433 0.5 26.1192 0.5 23.0075C0.5 19.8975 1.09 16.9725 2.27 14.2325C3.45167 11.4942 5.055 9.11167 7.08 7.085C9.10333 5.05833 11.4833 3.45417 14.22 2.2725C16.9567 1.09083 19.8808 0.5 22.9925 0.5C26.1025 0.5 29.0275 1.09 31.7675 2.27C34.5058 3.45167 36.8883 5.055 38.915 7.08C40.9417 9.10333 42.5458 11.4833 43.7275 14.22C44.9092 16.9567 45.5 19.8808 45.5 22.9925C45.5 26.1025 44.91 29.0275 43.73 31.7675C42.5483 34.5058 40.945 36.8883 38.92 38.915C36.8967 40.9417 34.5167 42.5458 31.78 43.7275C29.0433 44.9092 26.1192 45.5 23.0075 45.5Z"
      fill={fill}
    />
  </Svg>
);

export const CamBtn = ({ fill = "white", width = 24, height = 24 }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 16.73C13.0447 16.73 13.928 16.37 14.65 15.65C15.37 14.928 15.73 14.0447 15.73 13C15.73 11.9553 15.37 11.072 14.65 10.35C13.9273 9.63 13.044 9.27 12 9.27C10.956 9.27 10.0727 9.63 9.35 10.35C8.63 11.072 8.27 11.9553 8.27 13C8.27 14.0447 8.63033 14.928 9.351 15.65C10.0723 16.37 10.9553 16.73 12 16.73ZM12 15.73C11.2233 15.73 10.574 15.4693 10.052 14.948C9.53 14.4267 9.269 13.7773 9.269 13C9.269 12.2233 9.53 11.574 10.052 11.052C10.574 10.53 11.2233 10.269 12 10.269C12.7767 10.269 13.426 10.53 13.948 11.052C14.47 11.574 14.731 12.2233 14.731 13C14.731 13.7767 14.47 14.426 13.948 14.948C13.426 15.47 12.7767 15.731 12 15.731V15.73ZM4.615 20C4.155 20 3.771 19.846 3.463 19.538C3.15433 19.2293 3 18.845 3 18.385V7.615C3 7.155 3.15433 6.771 3.463 6.463C3.771 6.15433 4.155 6 4.615 6H7.573L9.423 4H14.577L16.427 6H19.385C19.845 6 20.229 6.15433 20.537 6.463C20.8457 6.771 21 7.155 21 7.615V18.385C21 18.845 20.846 19.229 20.538 19.537C20.2293 19.8457 19.845 20 19.385 20H4.615ZM4.615 19H19.385C19.5643 19 19.7117 18.9423 19.827 18.827C19.9423 18.7117 20 18.5643 20 18.385V7.615C20 7.43567 19.9423 7.28833 19.827 7.173C19.7117 7.05767 19.5643 7 19.385 7H15.988L14.144 5H9.856L8.012 7H4.615C4.43567 7 4.28833 7.05767 4.173 7.173C4.05767 7.28833 4 7.43567 4 7.615V18.385C4 18.5643 4.05767 18.7117 4.173 18.827C4.28833 18.9423 4.43567 19 4.615 19Z"
      fill={fill}
    />
  </Svg>
);

export const GallBtn = ({ fill = "white", width = 24, height = 24 }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.6061 8.76771C13.6061 8.32142 13.9657 7.95963 14.4092 7.95963H14.4172C14.8607 7.95963 15.2202 8.32142 15.2202 8.76771C15.2202 9.214 14.8607 9.57579 14.4172 9.57579H14.4092C13.9657 9.57579 13.6061 9.214 13.6061 8.76771Z"
      fill="white"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 7.9596C4 5.81934 5.73622 4 7.98484 4H16.0152C18.2638 4 20 5.81934 20 7.9596V16.0404C20 18.1807 18.2638 20 16.0152 20H7.98484C5.73622 20 4 18.1807 4 16.0404V7.9596ZM7.98484 5.45455C6.68543 5.45455 5.54541 6.52953 5.54541 7.9596V16.0404C5.54541 17.4705 6.68543 18.5455 7.98484 18.5455H16.0152C17.3146 18.5455 18.4546 17.4705 18.4546 16.0404V7.9596C18.4546 6.52953 17.3146 5.45455 16.0152 5.45455H7.98484Z"
      fill="white"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.70419 10.9021C8.2944 10.3306 9.08108 9.92331 9.99242 9.92331C10.9038 9.92331 11.6904 10.3306 12.2807 10.9021L12.2858 10.907L12.3018 10.9229L16.3169 14.9633C16.6038 15.252 16.596 15.7124 16.2994 15.9917C16.0029 16.271 15.5299 16.2633 15.243 15.9746L11.2303 11.9367L11.2245 11.931C10.8478 11.5672 10.4225 11.3779 9.99242 11.3779C9.56232 11.3779 9.13699 11.5672 8.76034 11.931L8.75451 11.9368L5.54489 15.1666C5.258 15.4552 4.78502 15.4629 4.48846 15.1836C4.1919 14.9043 4.18405 14.4439 4.47094 14.1552L7.68806 10.9179L7.70419 10.9021Z"
      fill="white"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.3513 12.5098C13.9402 11.9395 14.7185 11.5395 15.6138 11.5395C16.509 11.5395 17.2873 11.9395 17.8762 12.5098L17.8812 12.5147L17.8972 12.5305L19.5032 14.1467C19.7855 14.4307 19.7855 14.8912 19.5032 15.1752C19.221 15.4592 18.7634 15.4592 18.4812 15.1752L16.8775 13.5615L16.8716 13.5557C16.4937 13.1907 16.06 12.9941 15.6138 12.9941C15.1675 12.9941 14.7338 13.1907 14.3559 13.5557L14.35 13.5615L13.5494 14.3671C13.2671 14.6511 12.8095 14.6511 12.5273 14.3671C12.2451 14.0831 12.2451 13.6226 12.5273 13.3386L13.3352 12.5256L13.3513 12.5098Z"
      fill="white"
    />
  </Svg>
);

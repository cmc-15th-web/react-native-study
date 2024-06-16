import { ComponentProps } from "react";
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
} from "react-native-svg";

type IconType = ComponentProps<"svg">;

export const SplashIcon = ({ color }: IconType) => {
  return (
    <Svg width="50" height="50" viewBox="0 0 50 50" fill="none" color={color}>
      <G clipPath="url(#clip0_767_318)">
        <Path
          d="M35.4042 43.8083C38.9495 41.9194 41.8477 39.0118 43.7251 35.4605C45.6026 31.9091 46.3731 27.8767 45.9375 23.8833C43.0688 26.2487 40.3743 28.8179 37.875 31.5708C33.5709 36.3 30.0667 41.2729 27.4667 46.1187C30.2444 45.909 32.9478 45.1221 35.4042 43.8083ZM7.50005 38.4688C4.70838 42.2604 2.54797 47.8437 4.78547 49.525C7.94172 51.9 22.2938 45.3312 33.7605 31.1812C45.2271 17.0312 49.0209 2.4375 43.925 0.195833C41.573 -0.839583 36.6626 2.45208 33.8417 5.18333L35.0605 5.8375C37.8355 4.0625 42.4605 2.22708 38.1834 9.95417L38.1209 10.0646C35.0597 7.73905 31.396 6.33994 27.564 6.0331C23.7319 5.72626 19.8922 6.52454 16.5001 8.33333C6.70213 13.5542 2.99172 25.7292 8.21255 35.525C9.40147 37.7612 11.0033 39.7519 12.9334 41.3917C5.5188 47.1208 7.32922 42.1417 8.36463 39.6917L7.50005 38.4688Z"
          fill="url(#paint0_linear_767_318)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_767_318"
          x1="3.85657"
          y1="25.0009"
          x2="46.1454"
          y2="25.0009"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E73AFF" />
          <Stop offset="1" stopColor="#A45CFF" />
        </LinearGradient>
        <ClipPath id="clip0_767_318">
          <Rect width="50" height="50" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

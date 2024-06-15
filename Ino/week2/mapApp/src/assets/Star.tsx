import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface StarIconProps {
  color: string;
  size: number;
}
const StarIcon = ({color, size}: StarIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 15" fill="none">
      <Path
        d="M3.32489 14.923L4.56489 9.61001L0.441895 6.03801L5.87289 5.56801L7.99989 0.557007L10.1269 5.56701L15.5569 6.03701L11.4349 9.60901L12.6749 14.922L7.99989 12.102L3.32489 14.923Z"
        fill={color}
      />
    </Svg>
  );
};

export default StarIcon;

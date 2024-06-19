import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface StarCircleIconProps {
  color: string;
  size: number;
}
const StarCircleIcon = ({color, size}: StarCircleIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 30 30" fill="none">
      <Path
        d="M9.15612 23.6538L10.7061 17.0125L5.55237 12.5475L12.3411 11.96L14.9999 5.69625L17.6586 11.9588L24.4461 12.5463L19.2936 17.0113L20.8436 23.6525L14.9999 20.1275L9.15612 23.6538Z"
        fill={color}
      />
    </Svg>
  );
};

export default StarCircleIcon;

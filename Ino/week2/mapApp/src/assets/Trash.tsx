import React from 'react';
import {Path, Svg} from 'react-native-svg';

interface TrashIconProps {
  color: string;
  size: number;
}
const TrashIcon = ({color, size}: TrashIconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 18" fill="none">
      <Path
        d="M14 1H10.5L9.5 0H4.5L3.5 1H0V3H14M1 16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H11C11.5304 18 12.0391 17.7893 12.4142 17.4142C12.7893 17.0391 13 16.5304 13 16V4H1V16Z"
        fill={color}
      />
    </Svg>
  );
};

export default TrashIcon;

import {Path, Rect, Svg} from 'react-native-svg';

export const TrashCanSvg = ({width, height, fill}: SvgProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
      <Rect width={width} height={height} rx="10" fill={fill} />
      <Path
        d="M15.0833 6.33333H13.0416L12.4583 5.75H9.54163L8.95829 6.33333H6.91663V7.5H15.0833M7.49996 15.0833C7.49996 15.3928 7.62288 15.6895 7.84167 15.9083C8.06046 16.1271 8.35721 16.25 8.66663 16.25H13.3333C13.6427 16.25 13.9395 16.1271 14.1582 15.9083C14.377 15.6895 14.5 15.3928 14.5 15.0833V8.08333H7.49996V15.0833Z"
        fill="white"
      />
    </Svg>
  );
};
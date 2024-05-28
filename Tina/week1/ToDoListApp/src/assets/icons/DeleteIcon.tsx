import React from 'react';
import {Path, Svg} from 'react-native-svg';

const DeleteIcon = ({color}: {color: string}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.5 15.308H12.5V10.619L14.6 12.708L15.308 12L12 8.692L8.692 12L9.4 12.708L11.5 10.619V15.308ZM7.615 20C7.155 20 6.771 19.846 6.463 19.538C6.15433 19.2293 6 18.845 6 18.385V6H5V5H9V4.23H15V5H19V6H18V18.385C18 18.845 17.846 19.229 17.538 19.537C17.2293 19.8457 16.845 20 16.385 20H7.615ZM17 6H7V18.385C7 18.5383 7.064 18.6793 7.192 18.808C7.32067 18.936 7.46167 19 7.615 19H16.385C16.5383 19 16.6793 18.936 16.808 18.808C16.936 18.6793 17 18.5383 17 18.385V6Z"
        fill={color}
      />
    </Svg>
  );
};

export default DeleteIcon;

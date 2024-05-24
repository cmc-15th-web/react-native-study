import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {useThemeStore} from '@/store/Theme';

interface TrashIconProps {
  colorProps?: string;
}

const TrashIcon = ({colorProps}: TrashIconProps) => {
  const {color: storeColor} = useThemeStore();
  const color = colorProps || storeColor;
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.5 15.3046H12.5V10.6156L14.6 12.7046L15.308 11.9966L12 8.68856L8.692 11.9966L9.4 12.7046L11.5 10.6156V15.3046ZM7.615 19.9966C7.155 19.9966 6.771 19.8426 6.463 19.5346C6.15433 19.2259 6 18.8416 6 18.3816V5.99656H5V4.99656H9V4.22656H15V4.99656H19V5.99656H18V18.3816C18 18.8416 17.846 19.2256 17.538 19.5336C17.2293 19.8422 16.845 19.9966 16.385 19.9966H7.615ZM17 5.99656H7V18.3816C7 18.5349 7.064 18.6759 7.192 18.8046C7.32067 18.9326 7.46167 18.9966 7.615 18.9966H16.385C16.5383 18.9966 16.6793 18.9326 16.808 18.8046C16.936 18.6759 17 18.5349 17 18.3816V5.99656Z"
        fill={color}
      />
    </Svg>
  );
};

export default TrashIcon;

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useTheme} from '../../hooks/useTheme';

interface HeaderRightBtnProps {
  handleComplete: () => void;
}

export const headerRightBtn: React.FC<HeaderRightBtnProps> = ({
  handleComplete,
}) => {
  const {themeColor} = useTheme();

  return (
    <TouchableOpacity onPress={handleComplete}>
      <Text style={{color: themeColor}}>완료</Text>
    </TouchableOpacity>
  );
};

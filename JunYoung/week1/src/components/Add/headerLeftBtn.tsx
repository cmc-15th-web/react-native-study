import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTheme} from '../../context/ThemeContext';

// 버튼 import
import {ArrowBackBtn} from '../../assets/icons';

export const headerLeftBtn = ({navigation}: any) => {
  const {themeColor} = useTheme();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowBackBtn fill={themeColor} />
    </TouchableOpacity>
  );
};

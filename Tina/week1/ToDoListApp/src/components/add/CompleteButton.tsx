import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useThemeColor} from '../../store/color';

const CompleteButton = () => {
  const {theme} = useThemeColor();
  return (
    <TouchableOpacity>
      <Text themeColor={theme}>완료</Text>
    </TouchableOpacity>
  );
};

export default CompleteButton;

interface TextProps {
  themeColor: string;
}

const Text = styled.Text<TextProps>`
  font-size: 18px;
  color: ${({themeColor}) => themeColor};
`;

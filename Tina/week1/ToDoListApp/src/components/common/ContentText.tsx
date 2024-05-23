import React from 'react';
import styled from 'styled-components/native';
import {useThemeColor} from '@/store/color';

const ThemeColorText = ({text}: {text: string}) => {
  const {theme} = useThemeColor();
  return <Text color={theme}>{text}</Text>;
};

export default ThemeColorText;

interface ColorProps {
  color: string;
}

const Text = styled.Text<ColorProps>`
  color: ${({color}) => color};
  font-size: 18px;
`;

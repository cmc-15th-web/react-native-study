import React from 'react';
import styled from 'styled-components/native';
import THEME_COLOR, {ThemeColor} from '../styles/theme-color';
import {useThemeColor} from '../store/color';
import ThemeColorText from '../components/common/ContentText';

const themeColors: ThemeColor[] = ['orange', 'green', 'blue', 'purple', 'pink'];

const Setting = () => {
  const {setThemeColor} = useThemeColor();
  return (
    <Wrapper>
      <Header>
        <ThemeColorText text="설정" />
      </Header>
      <Text
        styledColor={THEME_COLOR.black}
        style={{marginHorizontal: 32, marginVertical: 16}}>
        색상을 선택해주세요.
      </Text>
      <ColorPalette>
        {themeColors.map((color: ThemeColor) => (
          <ColorChip
            key={color}
            styledColor={THEME_COLOR[color]}
            onPress={() => setThemeColor(color)}
          />
        ))}
      </ColorPalette>
    </Wrapper>
  );
};
export default Setting;

const Wrapper = styled.SafeAreaView``;

const Header = styled.View`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 12px 20px;
`;

interface ColorProps {
  styledColor: string;
}

const Text = styled.Text<ColorProps>`
  color: ${({styledColor}) => styledColor};
  font-size: 18px;
`;

const ColorPalette = styled.View`
  width: 100%;
  padding: 16px 65px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ColorChip = styled.TouchableOpacity<ColorProps>`
  background-color: ${({styledColor}) => styledColor};
  width: 30px;
  height: 30px;
  border-radius: 100px;
`;

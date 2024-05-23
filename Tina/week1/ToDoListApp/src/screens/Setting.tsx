import React from 'react';
import styled from 'styled-components/native';
import color from '../styles/color';

const Setting = () => {
  const themeColors: string[] = [
    color.orange,
    color.green,
    color.blue,
    color.purple,
    color.pink,
  ];
  return (
    <Wrapper>
      <Header>
        <Text styledColor={color.orange}>설정</Text>
      </Header>
      <Text
        styledColor={color.black}
        style={{marginHorizontal: 32, marginVertical: 16}}>
        색상을 선택해주세요.
      </Text>
      <ColorPalette>
        {themeColors.map(themeColor => (
          <ColorChip styledColor={themeColor} />
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

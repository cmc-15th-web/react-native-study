import React from 'react';
import styled from 'styled-components/native';
import color from '../styles/color';

const Setting = () => {
  return (
    <Wrapper>
      <Header>
        <Text>설정</Text>
      </Header>
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

const Text = styled.Text`
  color: ${color.orange};
  font-size: 18px;
`;

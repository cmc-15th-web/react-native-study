import React from 'react';
import BackIcon from '../assets/icons/arrow-back.svg';
import styled from 'styled-components/native';
import color from '../styles/color';

const Add = () => {
  return (
    <Wrapper>
      <Header>
        <BackIcon />
        <Title>할일을 추가해주세요!</Title>
        <Title>완료</Title>
      </Header>
    </Wrapper>
  );
};

export default Add;

const Wrapper = styled.SafeAreaView``;

const Header = styled.View`
  width: 100%;
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
`;

const Title = styled.Text`
  font-size: 18px;
  color: ${color.orange};
`;

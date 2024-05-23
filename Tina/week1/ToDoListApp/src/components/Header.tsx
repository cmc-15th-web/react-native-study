import React from 'react';
import BackIcon from '../assets/icons/arrow-back.svg';
import styled from 'styled-components/native';

interface HeaderProps {
  backIcon?: boolean;
  title: string;
  complete?: boolean;
}

const Header = ({backIcon, title, complete}: HeaderProps) => {
  return (
    <Wrapper>
      {backIcon && <BackIcon />}
      <Title>{title}</Title>
      {complete && <Title>완료</Title>}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.View`
  height: 48px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 12px 20px;
`;

const Title = styled.Text``;

import React from 'react';
import styled from 'styled-components/native';
import THEME_COLOR from '../../styles/theme-color';

const Input = () => {
  return <TextInput />;
};

export default Input;

const TextInput = styled.TextInput`
  height: 56px;
  width: 330px;
  border-radius: 20px;
  padding: 16px 30px;
  background-color: ${THEME_COLOR.white};
`;

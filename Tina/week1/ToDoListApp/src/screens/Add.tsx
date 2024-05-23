import React from 'react';
import styled from 'styled-components/native';
import THEME_COLOR from '../styles/theme-color';
import Input from '../components/add/TextInput';

const Add = () => {
  return (
    <Wrapper>
      <Input />
    </Wrapper>
  );
};

export default Add;

const Wrapper = styled.SafeAreaView`
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: ${THEME_COLOR.gray};
`;

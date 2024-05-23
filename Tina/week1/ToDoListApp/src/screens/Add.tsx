import React from 'react';
import styled from 'styled-components/native';
import THEME_COLOR from '../styles/theme-color';
import {useTask} from '../store/task';

const Add = () => {
  const {task, setTask} = useTask();
  return (
    <Wrapper>
      <TextInput value={task} onChangeText={e => setTask(e)} />
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

const TextInput = styled.TextInput`
  height: 56px;
  width: 330px;
  border-radius: 20px;
  padding: 16px 30px;
  background-color: ${THEME_COLOR.white};
`;

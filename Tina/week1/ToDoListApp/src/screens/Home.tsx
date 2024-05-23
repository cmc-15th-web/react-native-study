import React from 'react';
import styled from 'styled-components/native';
import THEME_COLOR from '../styles/theme-color';
import Task from '../components/home/Task';
import {useThemeColor} from '../store/color';

const Home = () => {
  const {theme} = useThemeColor();
  return (
    <Wrapper>
      <Header>
        <Text color={theme}>Today</Text>
      </Header>
      <TodoList>
        <Task id={0} task="할일" isCompleted={true} />
        <Task id={1} task="할일" isCompleted={false} />
      </TodoList>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${THEME_COLOR.gray};
`;

const Header = styled.View`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 12px 20px;
`;

interface ColorProps {
  color: string;
}

const Text = styled.Text<ColorProps>`
  color: ${({color}) => color};
  font-size: 18px;
`;

const TodoList = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  padding: 25px 32px;
`;

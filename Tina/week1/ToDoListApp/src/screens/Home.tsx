import React from 'react';
import styled from 'styled-components/native';
import THEME_COLOR from '../styles/theme-color';
import Task from '../components/home/Task';
import {useTask} from '../store/task';
import ThemeColorText from '../components/common/ContentText';

const Home = () => {
  const {taskList} = useTask();
  return (
    <Wrapper>
      <Header>
        <ThemeColorText text="Today" />
      </Header>
      <TodoList>
        {taskList.map((item, idx) => (
          <Task key={idx} isCompleted={item.isCompleted} task={item.task} />
        ))}
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

const TodoList = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  padding: 25px 32px;
`;

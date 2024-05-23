import React from 'react';
import styled from 'styled-components/native';
import color from '../styles/color';

const Home = () => {
  return (
    <Wrapper>
      <Header>
        <Text>Today</Text>
      </Header>
      <TodoList />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${color.gray};
`;

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

const TodoList = styled.ScrollView``;

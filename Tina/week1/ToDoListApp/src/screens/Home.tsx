import React from 'react';
import styled from 'styled-components/native';
import Header from '../components/Header';

const Home = () => {
  return (
    <Wrapper>
      <Header backIcon={true} title="Today" complete={true} />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

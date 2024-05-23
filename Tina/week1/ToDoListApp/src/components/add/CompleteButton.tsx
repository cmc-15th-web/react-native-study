import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import color from '../../styles/color';

const CompleteButton = () => {
  return (
    <TouchableOpacity>
      <Text>완료</Text>
    </TouchableOpacity>
  );
};

export default CompleteButton;

const Text = styled.Text`
  font-size: 18px;
  color: ${color.orange};
`;

import React from 'react';
import styled from 'styled-components/native';
import CompletedIcon from '../../assets/icons/completed.svg';
import UncompletedIcon from '../../assets/icons/uncompleted.svg';
import DeleteIcon from '../../assets/icons/DeleteIcon.tsx';
import {TouchableOpacity} from 'react-native';
import color from '../../styles/color';

interface TaskProps {
  id: number;
  isCompleted: boolean;
  task: string;
}
const Task = (props: TaskProps) => {
  const {id, isCompleted, task} = props;
  return (
    <Wrapper isCompleted={isCompleted}>
      <TouchableOpacity>
        {isCompleted ? <CompletedIcon /> : <UncompletedIcon />}
      </TouchableOpacity>
      <Text isCompleted={isCompleted}>{task}</Text>
      <TouchableOpacity>
        <DeleteIcon color={isCompleted ? color.white : color.orange} />
      </TouchableOpacity>
    </Wrapper>
  );
};

export default Task;

interface StyleType {
  isCompleted: boolean;
}

const Wrapper = styled.View<StyleType>`
  height: 56px;
  width: 330px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: ${({isCompleted}) =>
    isCompleted ? color.orange : color.white};
  margin-bottom: 18px;
`;

const Text = styled.Text<StyleType>`
  width: 220px;
  color: ${({isCompleted}) => (isCompleted ? color.white : color.orange)};
`;

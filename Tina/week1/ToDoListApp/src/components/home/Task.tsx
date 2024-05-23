import React from 'react';
import styled from 'styled-components/native';
import CompletedIcon from '../../assets/icons/completed.svg';
import UncompletedIcon from '../../assets/icons/UncompletedIcon';
import DeleteIcon from '../../assets/icons/DeleteIcon.tsx';
import {TouchableOpacity} from 'react-native';
import THEME_COLOR from '../../styles/theme-color.ts';
import {useThemeColor} from '../../store/color.ts';

interface TaskProps {
  id: number;
  isCompleted: boolean;
  task: string;
}
const Task = (props: TaskProps) => {
  const {id, isCompleted, task} = props;
  const {theme} = useThemeColor();
  return (
    <Wrapper isCompleted={isCompleted} color={theme}>
      <TouchableOpacity>
        {isCompleted ? <CompletedIcon /> : <UncompletedIcon />}
      </TouchableOpacity>
      <Text isCompleted={isCompleted} color={theme}>
        {task}
      </Text>
      <TouchableOpacity>
        <DeleteIcon color={isCompleted ? THEME_COLOR.white : theme} />
      </TouchableOpacity>
    </Wrapper>
  );
};

export default Task;

interface StyleProps {
  isCompleted: boolean;
  color: string;
}

const Wrapper = styled.View<StyleProps>`
  height: 56px;
  width: 330px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: ${props =>
    props.isCompleted ? props.color : THEME_COLOR.white};
  margin-bottom: 18px;
`;

const Text = styled.Text<StyleProps>`
  width: 220px;
  color: ${props => (props.isCompleted ? THEME_COLOR.white : props.color)};
`;

import React from 'react';
import styled from 'styled-components/native';
import CompletedIcon from '../../assets/icons/completed.svg';
import UncompletedIcon from '../../assets/icons/UncompletedIcon';
import DeleteIcon from '../../assets/icons/DeleteIcon.tsx';
import {Alert, TouchableOpacity} from 'react-native';
import THEME_COLOR from '../../styles/theme-color.ts';
import {useThemeColor} from '../../store/color.ts';
import {useTask} from '../../store/task.ts';

interface TaskProps {
  isCompleted: boolean;
  task: string;
}
const Task = (props: TaskProps) => {
  const {isCompleted, task} = props;
  const {theme} = useThemeColor();
  const {taskList, setTaskList} = useTask();

  const handleCheckPress = () => {
    const taskIdx = taskList.findIndex(todo => todo.task === task);
    taskList[taskIdx] = {
      isCompleted: !isCompleted,
      task: task,
    };
    setTaskList([...taskList]);
  };

  const handleDeletePress = () => {
    Alert.alert('정말 삭제하시겠습니까?', '', [
      {
        text: '취소',
        onPress: () => {
          return;
        },
      },
      {
        text: '확인',
        onPress: () => {
          const taskIdx = taskList.findIndex(todo => todo.task === task);
          setTaskList([
            ...taskList.slice(0, taskIdx),
            ...taskList.slice(taskIdx + 1),
          ]);
        },
      },
    ]);
  };

  return (
    <Wrapper isCompleted={isCompleted} color={theme}>
      <TouchableOpacity onPress={handleCheckPress}>
        {isCompleted ? <CompletedIcon /> : <UncompletedIcon />}
      </TouchableOpacity>
      <Text isCompleted={isCompleted} color={theme}>
        {task}
      </Text>
      <TouchableOpacity onPress={handleDeletePress}>
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

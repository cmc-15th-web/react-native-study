import React from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {useThemeColor} from '../../store/color';
import {useTask} from '../../store/task';
import {useNavigation} from '@react-navigation/native';

const CompleteButton = () => {
  const {theme} = useThemeColor();
  const {task, setTask, taskList, setTaskList} = useTask();
  const navigation = useNavigation();

  const handleOnPress = () => {
    if (!task) {
      Alert.alert('1글자 이상의 한글 혹은 영문으로 작성해주세요.');
      return;
    }
    Alert.alert('할일이 추가되었습니다!');
    setTaskList([...taskList, {task: task, isCompleted: false}]);
    setTask('');
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Text themeColor={theme}>완료</Text>
    </TouchableOpacity>
  );
};

export default CompleteButton;

interface TextProps {
  themeColor: string;
}

const Text = styled.Text<TextProps>`
  font-size: 18px;
  color: ${({themeColor}) => themeColor};
`;

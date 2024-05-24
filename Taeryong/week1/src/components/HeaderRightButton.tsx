import React from 'react';
import {Alert, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useButtonStore} from '@/store/Todo';

const HeaderRightButton = ({themeColor}: {themeColor: string}) => {
  const {setPressed} = useButtonStore();

  const handlePress = () => {
    setPressed(true);
    Alert.alert(
      '',
      '할일이 추가되었습니다',
      [{text: '확인', onPress: () => setPressed(false)}],
      {cancelable: false},
    );
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={[styles.text, {color: themeColor}]}>완료</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginRight: 20,
  },
  text: {
    fontSize: 16,
  },
});

export default HeaderRightButton;

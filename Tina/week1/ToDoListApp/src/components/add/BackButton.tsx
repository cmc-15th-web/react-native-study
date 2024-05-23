import React from 'react';
import {TouchableOpacity} from 'react-native';
import BackIcon from '../../assets/icons/BackIcon';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <BackIcon />
    </TouchableOpacity>
  );
};

export default BackButton;

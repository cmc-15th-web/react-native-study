import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ArrowBackIcon from '@/assets/icons/ArrowBack';

const HeaderLeftButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <ArrowBackIcon />
    </TouchableOpacity>
  );
};

export default HeaderLeftButton;

const styles = StyleSheet.create({
  button: {
    paddingLeft: 20,
  },
  text: {
    fontSize: 16,
    color: 'blue',
  },
});

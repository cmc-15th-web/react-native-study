import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useCustomStore} from '../hooks/useCustomStore';
import {COLORS} from '../theme';

type HeaderType = {
  title: string;
};

const Header = ({title}: HeaderType) => {
  const {theme} = useCustomStore();

  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.headerTitle, {color: COLORS[theme]}]}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 48,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
});

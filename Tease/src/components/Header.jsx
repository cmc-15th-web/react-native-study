import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useStore} from '../store';

const Header = ({title}) => {
  const {color} = useStore(state => state);
  return (
    <View style={styles.header}>
      <View></View>
      <View>
        <Text style={{color: color}}>Today</Text>
      </View>
      <View></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

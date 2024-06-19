import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../styles/theme_color';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation: any = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainTab');
    }, 1000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <LogoIcon width={50} height={50} fill={colors['gradient100']} />
      </View>
      <Text style={styles.title}>CMC</Text>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['black'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    bottom: 40,
    color: colors['gradient100'],
    fontSize: 20,
    fontWeight: '600',
  },
});

import LogoIcon from '../assets/Icons/Logo';

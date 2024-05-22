import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {useStore} from '../../store';
import {colors} from '../../styles/commonStyle';

const {width} = Dimensions.get('window');
const Setting = () => {
  const {setColor} = useStore(state => state);
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'설정'} />
      <View style={styles.titleTextWrapper}>
        <Text style={styles.titleText}>색상을 선택해주세요.</Text>
      </View>
      <View style={styles.colorCircleContainer}>
        <View style={[styles.colorCircleWrapper, {width: width * 0.7}]}>
          <TouchableOpacity
            onPress={() => setColor('orange')}
            style={[styles.colorCircle, {backgroundColor: colors.orange.color}]}
          />
          <TouchableOpacity
            onPress={() => setColor('green')}
            style={[styles.colorCircle, {backgroundColor: colors.green.color}]}
          />
          <TouchableOpacity
            onPress={() => setColor('blue')}
            style={[styles.colorCircle, {backgroundColor: colors.blue.color}]}
          />
          <TouchableOpacity
            onPress={() => setColor('purple')}
            style={[styles.colorCircle, {backgroundColor: colors.purple.color}]}
          />
          <TouchableOpacity
            onPress={() => setColor('pink')}
            style={[styles.colorCircle, {backgroundColor: colors.pink.color}]}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleTextWrapper: {
    height: 58,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  titleText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
  },
  colorCircleContainer: {
    height: 62,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorCircleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {useStore} from '../../store';

const dummy = [
  {
    id: 1,
    check: true,
    content: '아침먹기',
  },
  {
    id: 2,
    check: false,
    content: '아침먹기',
  },
  {
    id: 3,
    check: false,
    content: '아침먹기',
  },
];

const Home = () => {
  const {color} = useStore(state => state);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.todoContentContainer,
          {backgroundColor: item.check ? color : '#fff'},
        ]}>
        <View style={styles.todoContentWrapper}>
          <View style={styles.todoContentLeft}>
            {/* <View style={[styles.checkCircle, {borderColor: color}]}></View> */}
            {item.check ? (
              <View style={styles.checkCircle}>
                <CheckIcon width={24} height={24} fill={color} />
              </View>
            ) : (
              <CircleIcon width={24} height={24} fill={color} />
            )}
            <Text
              style={[{color: item.check ? '#fff' : '#000'}, styles.todoText]}>
              {item.content}
            </Text>
          </View>
          <View style={styles.todoContentRight}>
            {item.check ? (
              <TrashIcon width={24} height={24} fill={'#fff'} />
            ) : (
              <TrashIcon width={24} height={24} fill={color} />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Today'} />
      <View style={styles.contentsWrapper}>
        <FlatList
          data={dummy}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          removeClippedSubviews
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentsWrapper: {
    flex: 1,
    marginVertical: 25,
    marginHorizontal: 32,
  },
  //todo
  todoContentContainer: {
    width: '100%',
    height: 56,
    borderRadius: 20,
    marginBottom: 18,
    justifyContent: 'center',
  },
  todoContentWrapper: {
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todoContentLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkCircle: {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  todoText: {
    marginLeft: 10,
  },
});

import TrashIcon from '../../assets/icons/Trash.js';
import CheckIcon from '../../assets/icons/Check.js';
import CircleIcon from '../../assets/icons/Circle.js';

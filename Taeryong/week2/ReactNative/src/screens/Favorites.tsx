import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useFavoriteStore} from '@/store/favoriteStore';
import Colors from '@/constants/Colors';
import FavoriteTopIcon from '@/assets/icons/FavoriteTop.svg';
import TrashIcon from '@/assets/icons/Trash.svg';

const Favorites = () => {
  const favorites = useFavoriteStore(state => state.favorites);
  const removeFavorite = useFavoriteStore(state => state.removeFavorite);

  const confirmDelete = (index: number) => {
    Alert.alert(
      '즐겨찾기 삭제',
      '정말로 이 즐겨찾기를 삭제하시겠습니까?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: () => removeFavorite(index),
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <View style={styles.topContainer}>
        <FavoriteTopIcon />
      </View>
      <ScrollView style={styles.bottomContainer}>
        {favorites.map((item, index) => (
          <View
            key={index}
            style={[
              styles.item,
              index === favorites.length - 1 && styles.lastItem,
            ]}>
            <Text>{item}</Text>
            <TouchableOpacity onPress={() => confirmDelete(index)}>
              <TrashIcon />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: Colors.Blue200,
  },
  topContainer: {
    backgroundColor: Colors.Blue200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: Colors.White,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
    paddingHorizontal: 24,
    fontSize: 14,
  },
  item: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Blue200,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastItem: {
    borderBottomWidth: 0,
    paddingBottom: 50,
  },
});

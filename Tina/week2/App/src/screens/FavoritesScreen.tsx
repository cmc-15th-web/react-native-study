import {useFavList} from '@/store/favList';
import THEME_COLOR from '@/styles/theme-color';
import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Favorites from '@/assets/favorites.svg';
import KrFavorites from '@/assets/kr-favorites.svg';
import DeleteIocn from '@/assets/delete-icon.svg';

const FavoritesScreen = () => {
  const {favList, removeFavList} = useFavList();
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safearea}>
        <View style={styles.info}>
          <Favorites />
          <KrFavorites />
        </View>
        <View style={styles.address}>
          {favList.map(value => {
            return (
              <View style={styles.textContainer} key={value.id}>
                <Text style={styles.text}>{value.address}</Text>
                <TouchableHighlight onPress={() => removeFavList(value)}>
                  <DeleteIocn />
                </TouchableHighlight>
              </View>
            );
          })}
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLOR.Blue[100],
  },
  safearea: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 15,
  },
  address: {
    backgroundColor: THEME_COLOR.White,
    height: 560,
    marginBottom: -40,
    paddingVertical: 36,
    paddingHorizontal: 24,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  textContainer: {
    borderBottomColor: THEME_COLOR.Blue[200],
    borderBottomWidth: 1,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    paddingTop: 8,
    paddingBottom: 8,
  },
});

export default FavoritesScreen;

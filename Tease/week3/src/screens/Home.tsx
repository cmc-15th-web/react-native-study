import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../styles/theme_color';
import EmptyComponent from '../components/Home/EmptyComponent';
import {cameraPermission, libraryPermission} from '../utils/permission';
import usePhoto, {PhotoType} from '../stores/usePhoto';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const Home = () => {
  const {photos} = usePhoto();
  const navigation: any = useNavigation();

  const renderItem = ({item}: {item: PhotoType}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ItemDetail', {
              params: {item},
            })
          }>
          <Image source={{uri: item.image}} style={styles.item} />
        </TouchableOpacity>
      </>
    );
  };
  useEffect(() => {
    // cameraPermission();
    // libraryPermission();
  }, []);

  useEffect(() => {
    console.log(photos);
  }, [photos]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>세훈님의 사진첩</Text>
      </View>
      <FlatList
        data={photos}
        renderItem={renderItem}
        removeClippedSubviews
        ListEmptyComponent={EmptyComponent}
        style={styles.photoList}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors['black'],
  },
  textContainer: {
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  title: {
    color: colors['gradient100'],
    fontSize: 20,
    fontWeight: '600',
  },
  //empty
  emptyContainer: {
    // flex: 1,
    minHeight: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: colors['gray400'],
    fontSize: 16,
  },
  //photoList
  photoList: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff',
    marginHorizontal: 16,
  },
  item: {
    width: (width - 32) / 3,
    height: (width - 32) / 3,
  },
});

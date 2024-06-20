import React from 'react';
import {FlatList, StyleSheet, Image, Pressable, Text, View} from 'react-native';
import {useImageStore} from '@src/store/imageStore';
import Colors from '@src/Colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '@src/screens/Props';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
const ImageListScreen = () => {
  const {images, selectImage} = useImageStore();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const goToDetailScreen = (item: any) => {
    selectImage(item);
    console.log('selectedItem:', item);
    navigation.navigate('Detail');
  };

  const renderItem = ({item}: {item: any}) => (
    <Pressable onPress={() => goToDetailScreen(item)}>
      <Image source={{uri: item.path}} style={styles.image} />
    </Pressable>
  );

  return (
    <>
      {images.length === 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: Colors.Gray400,
              textAlign: 'center',
            }}>
            업로드한 사진이 없습니다.
          </Text>
        </View>
      ) : (
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
  },
  date: {
    fontSize: 12,
    color: Colors.Gray600,
  },
  list: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

export default ImageListScreen;

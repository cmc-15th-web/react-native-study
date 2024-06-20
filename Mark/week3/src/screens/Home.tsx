import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Palette} from '../constants/palette';
import {useStore} from '../store/store';
import {Dimensions} from 'react-native';
import GradientText from '../components/GradientText';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const Home = () => {
  const images = useStore(state => state.images);
  const IMG_SIZE = (Dimensions.get('screen').width - 52) / 3; // padding과 gap을 제외한 넓이 / 3
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderItem = ({item}: {item: UploadedImage}) => (
    <Pressable onPress={() => handleImage(item.path, item.modificationDate)}>
      <Image source={{uri: item.path}} width={IMG_SIZE} height={IMG_SIZE} />
    </Pressable>
  );

  const handleImage = (imagePath: string, modificationDate: string) => {
    navigation.navigate('Detail', {imagePath, modificationDate});
  }

  return (
    <View style={styles.container}>
      <GradientText style={styles.title} colors={[Palette.Pink, Palette.Purple]}>마크의 사진첩</GradientText>
      <FlatList
        data={images}
        keyExtractor={image => image.path}
        numColumns={3}
        renderItem={renderItem}
        contentContainerStyle={styles.flatList}
        columnWrapperStyle={styles.flatListRow}
        ListEmptyComponent={
          <View style={styles.emptyTextWrapper}>
            <Text style={styles.emptyText}>업로드한 사진이 없습니다.</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Palette.Black,
    paddingHorizontal: 18,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  flatList: {
    flex: 1,
    marginTop: 20
  },
  flatListRow: {
    justifyContent: 'flex-start',
    gap: 8,
  },
  emptyTextWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: Palette.Gray400,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Home;

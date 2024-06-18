import {
  Button,
  View,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  Text,
  TouchableHighlight,
} from 'react-native';
import Colors from '@/constants/Colors';
import CleanGallery from '@/components/common/CleanGallery';
import useImageStore from '@/store/imageStore';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '@/types/navigation';
import {ImageData} from '@/types/type';

const {width} = Dimensions.get('window');
const imageSize = (width - 32) / 3; // 32 = 16+16 패딩 값 고려

const FlatListComponent = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const images = useImageStore(state => state.images);

  const renderItem = ({item}: {item: ImageData}) => (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate('DetailPhoto', {
          image: {
            ...item,
            creationDate: item.creationDate.toISOString(), // Date 객체는 전달이 안되므로 string으로 변환
          },
        })
      }>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.path}} style={styles.image} />
      </View>
    </TouchableHighlight>
  );

  return (
    <FlatList
      data={images}
      renderItem={renderItem}
      keyExtractor={item => item.path}
      numColumns={3}
      columnWrapperStyle={styles.columnWrapper}
    />
  );
};

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Today</Text>
      <FlatListComponent />
      <Button title="Clean" onPress={CleanGallery} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Gray900,
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  textTitle: {
    color: Colors.Gray400,
    marginTop: 20,
    marginBottom: 10,
  },
  columnWrapper: {
    justifyContent: 'flex-start',
  },
  imageContainer: {
    width: imageSize,
    height: imageSize,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

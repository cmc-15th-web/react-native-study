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
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface ImageDataType {
  path: string;
  creationDate: Date;
}

// 타입 정의 수정
type RootStackParamList = {
  DetailPhoto: {image: ImageDataType};
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const {width} = Dimensions.get('window');
const imageSize = (width - 32) / 3; // 32 = 16+16 패딩 값 고려

const FlatListComponent = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const images = useImageStore(state => state.images);

  const renderItem = ({item}: {item: ImageDataType}) => (
    <TouchableHighlight
      onPress={() => navigation.navigate('DetailPhoto', {image: item})}>
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

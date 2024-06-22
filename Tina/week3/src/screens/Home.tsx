import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import THEME_COLOR from '../styles/theme-color';
import GradientComponent from '../components/GradientComponent';
import {ImageProps, useImages} from '../store/images';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  ImageDetail: ImageProps;
};

const Home = () => {
  const {imgList} = useImages();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const renderItem = ({item}: {item: ImageProps}) => {
    const handleImagePress = () => {
      navigation.navigate('ImageDetail', item);
    };

    return (
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          style={styles.image}
          source={{uri: item.imgUrls}}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <GradientComponent
        component={<Text style={styles.header}>Tina님의 사진첩</Text>}
      />
      {imgList.length === 0 ? (
        <View style={styles.noImg}>
          <Text style={styles.noImgText}>업로드한 사진이 없습니다.</Text>
        </View>
      ) : (
        <FlatList
          data={imgList}
          renderItem={renderItem}
          keyExtractor={(item: ImageProps) => item.timestamp}
          numColumns={3}
          contentContainerStyle={styles.flatlist}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLOR.Gray[900],
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME_COLOR.Purple,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 18,
  },
  noImgText: {
    fontSize: 16,
    color: THEME_COLOR.Gray[400],
    textAlign: 'center',
  },
  noImg: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  flatlist: {
    flexGrow: 1, // FlatList가 화면 전체를 차지하도록 함
    alignContent: 'center', // 수직 방향으로 가운데 정렬
    paddingHorizontal: 14,
  },
});
export default Home;

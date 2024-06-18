import {Button, View, Image, Text, ScrollView, StyleSheet} from 'react-native';
import Colors from '@/constants/Colors';
import CleanGallery from '@/components/common/CleanGallery';
import useImageStore from '@/store/imageStore';

const ImageGallery = () => {
  const images = useImageStore(state => state.images);

  return (
    <View style={styles.container}>
      <Button title="Clean" onPress={CleanGallery} />
      <ScrollView>
        {images.map((img, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{uri: img.path}} style={styles.image} />
            <Text style={{color: 'white'}}>
              Uploaded at: {img.creationDate.toLocaleString()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Gray900,
  },
  imageContainer: {
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ImageGallery;

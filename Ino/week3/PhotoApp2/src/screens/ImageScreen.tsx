import Colors from '@src/Colors';
import {useImageStore} from '@src/store/imageStore';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import ArrowBack from '@src/assets/icons/ArrowBack.svg';
import {useNavigation} from '@react-navigation/native';

const ImageScreen = () => {
  const navigation = useNavigation();
  const {selectedImage} = useImageStore();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Gray900,
      }}>
      <View style={styles.header}>
        <Pressable onPress={goBack}>
          <ArrowBack />
        </Pressable>

        <Text style={styles.headerText}>
          {selectedImage?.date
            ? `${selectedImage.date.getFullYear()}.${
                selectedImage.date.getMonth() + 1
              }.${selectedImage.date.getDate()}`
            : ''}
        </Text>
        <View style={{width: 24, height: 1}}></View>
      </View>
      <Image
        source={{uri: selectedImage?.path}}
        style={{width: '100%', height: '80%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  headerText: {
    color: Colors.Pink,
    fontSize: 18,
  },
});
export default ImageScreen;

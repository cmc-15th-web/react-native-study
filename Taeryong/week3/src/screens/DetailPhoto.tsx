import Colors from '@/constants/Colors';
import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import DetailPhotoHeader from '@/components/common/DetailPhotoHeader';
import {SafeAreaView} from 'react-native-safe-area-context';

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}.${month}.${day} ${hours}:${minutes}`;
};

const deviceWidth = Dimensions.get('window').width;

const DetailPhoto = ({route}: any) => {
  const {image} = route.params;
  const creationDate = new Date(image.creationDate);
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <DetailPhotoHeader header={formatDate(creationDate)} />
      <View style={styles.container}>
        <Image source={{uri: image.path}} style={styles.image} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: Colors.Gray900,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 70,
  },
  image: {
    width: deviceWidth,
    height: deviceWidth,
  },
});

export default DetailPhoto;

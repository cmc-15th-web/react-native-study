import Colors from '@/constants/Colors';
import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import DetailPhotoHeader from '@/components/common/DetailPhotoHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {DetailPhotoRouteProp} from '@/types/navigation';
import {FormatDate} from '@/utils/FormatDate';

const deviceWidth = Dimensions.get('window').width;

const DetailPhoto = ({route}: {route: DetailPhotoRouteProp}) => {
  const {image} = route.params;
  const creationDate = new Date(image.creationDate); // 직렬화 한 거 다시 Date 객체로 변환
  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <DetailPhotoHeader header={FormatDate(creationDate)} />
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

import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import usePhoto from '../../stores/usePhoto';
import {PhotoType} from '../../stores/usePhoto';
import {convertDate2} from '../../utils/convertDate';

const BottomSheetContent = () => {
  const {addPhoto} = usePhoto();
  const cameraIcon = require('../../assets/Icons/Camera.png');
  const galleryIcon = require('../../assets/Icons/gallery.png');

  const cameraHandler = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };
  const galleryHandler = () => {
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true,
    //   multiple: true,
    // }).then(image => {
    //   console.log('selected image', image);
    //   // const newPhoto: PhotoType = {
    //   //   id: Number(image.creationDate),
    //   //   image: image.path,
    //   //   date: Date.now(),
    //   //   dateString: convertDate2(Date.now()),
    //   // };
    //   // console.log(newPhoto);
    //   // addPhoto(newPhoto);
    // });
    ImagePicker.openPicker({
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      multiple: true,
      mediaType: 'photo',
    }).then(async images => {
      const result = [];

      for (const image of images) {
        result.push(
          await ImagePicker.openCropper({
            mediaType: 'photo',
            path: image.path,
            width: 1000,
            height: 1000,
          }),
        );
      }
      // console.log(result);
      for (const image of result) {
        const newPhoto: PhotoType = {
          id: Number(image.creationDate),
          image: image.path,
          date: Date.now(),
          dateString: convertDate2(Date.now()),
        };
        console.log(newPhoto);
        addPhoto(newPhoto);
      }
    });
  };

  return (
    <View style={styles.contentWrapper}>
      <TouchableOpacity style={styles.btn} onPress={cameraHandler}>
        <Image source={cameraIcon} style={styles.icon} />
        <Text style={styles.text}>카메라로 촬영하기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={galleryHandler}>
        <Image source={galleryIcon} style={styles.icon} />
        <Text style={styles.text}>갤러리에서 선택하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomSheetContent;

const styles = StyleSheet.create({
  contentWrapper: {
    alignContent: 'flex-start',
    gap: 30,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

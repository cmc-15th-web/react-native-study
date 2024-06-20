import React, {useCallback, useMemo, useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {TouchableHighlight} from 'react-native';
import AddIcon from './icons/AddIcon';
import THEME_COLOR from '../styles/theme-color';
import Camera from '../assets/camera-icon.svg';
import Gallery from '../assets/gallery-icon.svg';
import ImagePicker from 'react-native-image-crop-picker';
import {useImages} from '../store/images';

const PhotoBottomSheet = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['1%', '30%'], []);
  const {setImgList} = useImages();

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    // console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  return (
    <BottomSheetModalProvider>
      <TouchableHighlight
        style={styles.addIcon}
        onPress={handlePresentModalPress}>
        <AddIcon />
      </TouchableHighlight>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        // eslint-disable-next-line react-native/no-inline-styles
        handleStyle={{
          backgroundColor: THEME_COLOR.Gray[600],
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}>
        <View style={styles.contentContainer}>
          <TouchableHighlight
            style={styles.touchableHighlight}
            onPress={() =>
              ImagePicker.openCamera({
                width: 300,
                height: 400,
                cropping: true,
              }).then(image => {
                console.log(image);
              })
            }>
            <View style={styles.iconTextContainer}>
              <Camera />
              <Text style={styles.text}>카메라로 촬영하기</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.touchableHighlight}
            onPress={() =>
              ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true,
              }).then(image => {
                if (!image.creationDate) {
                  return;
                }
                const date = new Date(Number(image.creationDate) * 1000);
                console.log(
                  date.getFullYear() +
                    '.' +
                    ('0' + (date.getMonth() + 1)).slice(-2) +
                    '.' +
                    ('0' + date.getDate()).slice(-2) +
                    ' ' +
                    ('0' + date.getHours()).slice(-2) +
                    ':' +
                    ('0' + date.getMinutes()).slice(-2),
                );
                setImgList({
                  imgUrls: image.path,
                  date:
                    date.getFullYear() +
                    '.' +
                    ('0' + (date.getMonth() + 1)).slice(-2) +
                    '.' +
                    ('0' + date.getDate()).slice(-2) +
                    ' ' +
                    ('0' + date.getHours()).slice(-2) +
                    ':' +
                    ('0' + date.getMinutes()).slice(-2),
                  timestamp: image.creationDate,
                });
              })
            }>
            <View style={styles.iconTextContainer}>
              <Gallery />
              <Text style={styles.text}>갤러리에서 선택하기</Text>
            </View>
          </TouchableHighlight>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: THEME_COLOR.Gray[600],
    zIndex: 100,
    paddingHorizontal: 24,
    paddingVertical: 60,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  iconTextContainer: {
    gap: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  touchableHighlight: {
    flex: 1,
    width: '100%',
  },
  text: {
    color: THEME_COLOR.White,
    fontSize: 16,
  },
  addIcon: {
    position: 'absolute',
    bottom: 55,
    alignSelf: 'center',
  },
});

export default PhotoBottomSheet;

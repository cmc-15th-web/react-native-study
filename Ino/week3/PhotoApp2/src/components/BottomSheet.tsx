// src/components/CustomBottomSheet.tsx
import React, {useCallback} from 'react';
import {View, Text, StyleSheet, Button, Pressable} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useModalStore} from '@src/store/bottomRefStore';
import {useImageStore} from '@src/store/imageStore';

import Camera from '@src/assets/icons/Camera.svg';
import Galary from '@src/assets/icons/Galary.svg';
import Colors from '@src/Colors';
import {chooseImage, openCamera} from './PickImage';

const CustomBottomSheet = () => {
  const {bottomSheetModalRef} = useModalStore();
  const {addImage} = useImageStore();

  const handleDismisstModalPress = React.useCallback(() => {
    console.log('bottom sheet 닫힘');
    bottomSheetModalRef?.current?.dismiss();
  }, []);

  // image 추가
  const handleCamera = async () => {
    handleDismisstModalPress();
    const selectedImage = await openCamera();
    addImage(selectedImage);
  };
  const handleGaraly = async () => {
    handleDismisstModalPress();
    const selectedImage = await chooseImage();
    addImage(selectedImage);
  };

  return (
    <View style={styles.container}>
      <BottomSheetModal
        backgroundStyle={{backgroundColor: Colors.Gray600}}
        ref={bottomSheetModalRef}
        snapPoints={['30%', '50%']}
        onChange={index => console.log('handleSheetChanges', index)}>
        <View style={styles.contentContainer}>
          <Pressable onPress={handleCamera}>
            <View style={styles.item}>
              <Camera />
              <Text style={{color: Colors.White, fontSize: 16, marginLeft: 8}}>
                카메라로 촬영하기
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={handleGaraly}>
            <View style={styles.item}>
              <Galary />
              <Text style={{color: Colors.White, fontSize: 16, marginLeft: 8}}>
                갤러리에서 선택하기
              </Text>
            </View>
          </Pressable>
        </View>
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: 24,
  },
  item: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default CustomBottomSheet;

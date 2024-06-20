import {Pressable, StyleSheet, Text} from 'react-native';
import {AddBtnSvg} from '../assets/AddBtnSvg';
import {Palette} from '../constants/palette';
import {useCallback, useMemo, useRef} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {CameraSvg} from '../assets/CameraSvg';
import {GallerySvg} from '../assets/GallerySvg';
import { useImageUpload } from '../hooks/useImageUpload';

const AddPhoto = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => [166, 166], []);
  const {uploadByCamera, uploadByGallery} = useImageUpload();

  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        style={styles.bottomSheetBackground}
        {...props}
        pressBehavior="close"
      />
    ),
    [],
  );

  return (
    <>
      <Pressable style={styles.button} onPress={handlePresentModalPress}>
        <AddBtnSvg width="46" height="46" fill={Palette.GradientPurplePink} />
      </Pressable>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        enablePanDownToClose={true} // 아래로 스와이프하여 닫기 기능 활성화
        backgroundStyle={styles.bottomSheetContainer}
        handleIndicatorStyle={styles.handleIndicator}>
        <BottomSheetView style={styles.bottomSheetContent}>
          <Pressable style={styles.bottomSheetItem} onPress={uploadByCamera}>
            <CameraSvg width="24" height="24" fill={Palette.White} />
            <Text style={styles.bottomSheetText}>카메라로 촬영하기</Text>
          </Pressable>
          <Pressable style={styles.bottomSheetItem} onPress={uploadByGallery}>
            <GallerySvg width="24" height="24" fill={Palette.White} />
            <Text style={styles.bottomSheetText}>갤러리에서 선택하기</Text>
          </Pressable>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 23,
    alignSelf: 'center',
  },
  bottomSheetBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomSheetContainer: {
    backgroundColor: Palette.Gray600,
  },
  handleIndicator: {
    width: 50,
    backgroundColor: Palette.Gray400,
  },
  bottomSheetContent: {
    paddingVertical: 30,
    paddingHorizontal: 24,
    gap: 30,
  },
  bottomSheetItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bottomSheetText: {
    color: Palette.White,
  },
});

export default AddPhoto;

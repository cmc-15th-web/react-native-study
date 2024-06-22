import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import {colors} from '../styles/theme_color';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheetContent from '../components/Add/BottomSheetContent';

const Add = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        appearsOnIndex={0} // 이거 추가
        disappearsOnIndex={-1} // 이거 추가
      />
    ),
    [],
  );

  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <Button
            onPress={handlePresentModalPress}
            title="Present Modal"
            color="black"
          />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            backdropComponent={renderBackdrop}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            style={{borderWidth: 1}}
            handleIndicatorStyle={styles.indicator}
            handleStyle={styles.modalTop}>
            <BottomSheetView style={styles.contentContainer}>
              <BottomSheetContent />
            </BottomSheetView>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  modalTop: {
    backgroundColor: colors['gray600'],
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  indicator: {
    backgroundColor: colors['gray400'],
  },
  //style
  contentContainer: {
    flex: 1,
    backgroundColor: colors['gray600'],
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
});

export default Add;

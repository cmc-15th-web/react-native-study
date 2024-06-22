import Addimage from '../../asset/Addimage';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomSheet from '@gorhom/bottom-sheet';

export default function AddButton() {
  // open
  const [visible, setVisible] = useState<boolean>(false);

  const bottomSheetRef = useRef(null);

  // const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['30%', '10%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index == -1) {
      setVisible(false);
    }
  }, []);

  return (
    <SafeAreaView style={styles.SafeContainer}>
      <View style={styles.ScreenContainer}>
        <Addimage />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        onChange={handleSheetChanges}
        snapPoints={['30%', '50%']}>
        <View style={styles.bottomSheetStyle}>
          <TouchableOpacity>
            <Text>카메라로 촬영하기</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>갤러리에서 선택하기</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeContainer: {
    flex: 1,
  },
  ScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 30,
  },
  bottomSheetStyle: {
    position: 'absolute',
    flex: 1,
    height: 50,
    width: 100,
    backgroundColor: 'white',
    opacity: 0.5,
    zIndex: 1,
  },
});

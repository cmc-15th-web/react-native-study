// src/components/BottomSheetModal.tsx

import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import Modal from "react-native-modal"; // 모달 컴포넌트
import * as ImagePicker from "expo-image-picker"; // 이미지 피커 라이브러리
import { CamBtn, GallBtn } from "../assets/icons"; // 아이콘 컴포넌트
import theme from "../theme"; // 테마 설정
import { BottomSheetModalProps, ImagePickerResult } from "../types"; // 타입 정의

// BottomSheetModal 컴포넌트 정의
const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
  isVisible,
  onClose,
  onImageSelect,
}) => {
  // 컴포넌트가 마운트될 때 권한 요청
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "죄송합니다. 이 기능을 사용하려면 카메라 롤 권한이 필요합니다!"
          );
        }
      }
    })();
  }, []);

  // 카메라 버튼을 눌렀을 때 실행되는 함수
  const handleCameraPress = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("죄송합니다. 이 기능을 사용하려면 카메라 권한이 필요합니다!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      console.log("Camera Result:", result);
      onImageSelect([result as unknown as ImagePickerResult]); // 결과를 ImagePickerResult 타입으로 변환하여 전달
    } else {
      onImageSelect([]);
    }
    onClose();
  };

  // 갤러리 버튼을 눌렀을 때 실행되는 함수
  const handleGalleryPress = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true, // 다중 선택 허용
    });

    if (!result.canceled && result.assets) {
      console.log("Gallery Result:", result.assets);
      onImageSelect(result.assets as ImagePickerResult[]); // 결과를 ImagePickerResult 배열로 변환하여 전달
    } else {
      onImageSelect([]);
    }
    onClose();
  };

  return (
    <Modal
      isVisible={isVisible} // 모달 표시 여부
      onBackdropPress={onClose} // 모달 외부를 클릭하면 닫힘
      style={styles.bottomModal}
    >
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.container} onPress={handleCameraPress}>
          <CamBtn />
          <Text style={styles.title}>카메라로 촬영하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container} onPress={handleGalleryPress}>
          <GallBtn />
          <Text style={styles.title}>갤러리에서 선택하기</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default BottomSheetModal;

// 스타일 정의
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: theme.colors.gray600,
    padding: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: "center",
    height: 160,
    gap: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colors.white,
  },
});

import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import Modal from "react-native-modal";
import * as ImagePicker from "expo-image-picker";
import { CamBtn, GallBtn } from "../assets/icons";
import theme from "../theme";

interface BottomSheetModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
  isVisible,
  onClose,
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
    // 카메라 권한 요청
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("죄송합니다. 이 기능을 사용하려면 카메라 권한이 필요합니다!");
      return;
    }

    // 카메라 실행
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      console.log("ImagePicker Result:", result);
    }
  };

  // 갤러리 버튼을 눌렀을 때 실행되는 함수
  const handleGalleryPress = async () => {
    // 갤러리 실행
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      console.log("ImagePicker Result:", result);
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
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

import { getPathFromState } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
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
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={styles.bottomModal}
    >
      <View style={styles.modalContent}>
        <View style={styles.container}>
          <CamBtn />
          <Text style={styles.title}>카메라로 촬영하기</Text>
        </View>
        <View style={styles.container}>
          <GallBtn />
          <Text style={styles.title}>갤러리에서 선택하기</Text>
        </View>
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

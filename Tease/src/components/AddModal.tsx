import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {colors} from '../styles/commonStyle';

interface AddModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  moveMainTab: () => void;
}

const AddModal: React.FC<AddModalProps> = ({
  modalVisible,
  setModalVisible,
  moveMainTab,
}) => {
  const confirmHandler = () => {
    setModalVisible(!modalVisible);
    moveMainTab();
  };
  return (
    <Modal isVisible={modalVisible} style={styles.modal}>
      <View
        style={[
          styles.modalContainer,
          {backgroundColor: colors.darkGray.color},
        ]}>
        <View style={styles.modalTopContentWrapper}>
          <Text style={styles.modalText}>할일이 추가되었습니다!</Text>
        </View>
        <View style={styles.modalBottomContentWrapper}>
          <TouchableOpacity
            style={styles.moduleBtnWrapper}
            onPress={confirmHandler}>
            <Text style={styles.modalText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 246,
    height: 85,
    borderRadius: 20,
  },
  modalText: {
    color: '#fff',
  },
  modalTopContentWrapper: {
    flex: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderColor: '#fff',
  },
  modalBottomContentWrapper: {
    flex: 9,
    flexDirection: 'row',
    alignItems: 'center',
  },
  moduleBtnWrapper: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftBtn: {
    borderRightColor: '#fff',
    borderRightWidth: 0.5,
  },
});

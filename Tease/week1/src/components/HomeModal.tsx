import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {colors} from '../styles/commonStyle';

interface TodoItem {
  id: string;
  content: string;
  check: boolean;
}

interface HomeModalProps {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  removeTodo: (todoItem: TodoItem) => void;
  deleteTodoItem: TodoItem;
}

const HomeModal: React.FC<HomeModalProps> = ({
  modalVisible,
  setModalVisible,
  removeTodo,
  deleteTodoItem,
}) => {
  const removeHandler = (deleteItem: number) => {
    removeTodo(deleteItem);
    setModalVisible(!modalVisible);
  };
  return (
    <Modal isVisible={modalVisible} style={styles.modal}>
      <View
        style={[
          styles.modalContainer,
          {backgroundColor: colors.darkGray.color},
        ]}>
        <View style={styles.modalTopContentWrapper}>
          <Text style={styles.modalText}>정말 삭제하시겠습니까?</Text>
        </View>
        <View style={styles.modalBottomContentWrapper}>
          <TouchableOpacity
            style={[styles.moduleBtnWrapper, styles.leftBtn]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.modalText}>취소</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.moduleBtnWrapper}
            onPress={() => removeHandler(deleteTodoItem)}>
            <Text style={styles.modalText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default HomeModal;

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

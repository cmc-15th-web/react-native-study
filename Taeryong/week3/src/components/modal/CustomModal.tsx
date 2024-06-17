import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import useModalStore from '@/store/modalStore';

const CustomModal = () => {
  const isModalVisible = useModalStore(state => state.isModalVisible);
  const toggleModal = useModalStore(state => state.toggleModal);

  const handleCamera = () => {
    console.log('카메라에서 선택하기');
    toggleModal();
  };

  const handleGallery = () => {
    console.log('갤러리에서 선택하기');
    toggleModal();
  };

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={toggleModal}
      style={styles.modal}>
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.modalButton} onPress={handleCamera}>
          <Text>카메라로 촬영하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalButton} onPress={handleGallery}>
          <Text>갤러리에서 선택하기</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalButton: {
    padding: 15,
    alignItems: 'center',
  },
});

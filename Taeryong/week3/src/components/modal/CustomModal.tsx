import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import useModalStore from '@/store/modalStore';
import Colors from '@/constants/Colors';
import CameraIcon from '@/assets/icons/Camera.svg';
import GalleryIcon from '@/assets/icons/Gallery.svg';
import UploadGalleryImage from '@/components/common/UploadGalleryImage';

const CustomModal = () => {
  const isModalVisible = useModalStore(state => state.isModalVisible);
  const toggleModal = useModalStore(state => state.toggleModal);
  const {uploadByGallery} = UploadGalleryImage();

  const handleCamera = () => {
    console.log('카메라에서 선택하기');
    toggleModal();
  };

  const handleGallery = async () => {
    console.log('갤러리에서 선택하기');
    await toggleModal();
    setTimeout(() => uploadByGallery(), 400); // 모달이 완전히 닫힌 후 실행하도록 해야 충돌 방지 가능
  };

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={toggleModal}
      onSwipeComplete={toggleModal} // swipe down to close가 가능토록 설정
      swipeDirection="down" 
      swipeThreshold={150} // swipe down to close의 범위
      style={styles.modal}>
      <View style={styles.modalContent}>
        <View style={styles.modalLine} />
        <TouchableOpacity style={styles.modalButton} onPress={handleCamera}>
          <View style={styles.contentContainer}>
            <CameraIcon fill={Colors.White} />
            <Text style={styles.textStyle}>카메라로 촬영하기</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalButton} onPress={handleGallery}>
          <View style={styles.contentContainer}>
            <GalleryIcon fill={Colors.White} />
            <Text style={styles.textStyle}>갤러리에서 선택하기</Text>
          </View>
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
    backgroundColor: Colors.Gray600,
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 18,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalLine: {
    width: 50,
    height: 5,
    backgroundColor: Colors.Gray400,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 20,
  },
  modalButton: {
    paddingVertical: 15,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
  },
});

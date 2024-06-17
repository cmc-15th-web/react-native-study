import {create} from 'zustand';

interface ModalState {
  isModalVisible: boolean;
  toggleModal: () => void;
}

const useModalStore = create<ModalState>(set => ({
  isModalVisible: false,
  toggleModal: () => set(state => ({isModalVisible: !state.isModalVisible})),
}));

export default useModalStore;

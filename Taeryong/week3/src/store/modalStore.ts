import {create} from 'zustand';
import {ModalStore} from '@/types/type';

const useModalStore = create<ModalStore>(set => ({
  isModalVisible: false,
  toggleModal: () => set(state => ({isModalVisible: !state.isModalVisible})),
}));

export default useModalStore;

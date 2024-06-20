import {create} from 'zustand';
import {BottomSheetModal} from '@gorhom/bottom-sheet';

interface ModalState {
  bottomSheetModalRef: React.RefObject<BottomSheetModal> | null;
  setBottomSheetModalRef: (ref: React.RefObject<BottomSheetModal>) => void;
}

export const useModalStore = create<ModalState>(set => ({
  bottomSheetModalRef: null,
  setBottomSheetModalRef: ref => set({bottomSheetModalRef: ref}),
}));

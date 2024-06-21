export interface BottomSheetModalProps {
  isVisible: boolean;
  onClose: () => void;
  onImageSelect: (selectedImages: ImagePickerResult[]) => void;
}

export interface ImagePickerResult {
  uri: string;
  [key: string]: any;
}

export interface HomeScreenProps {
  images: ImagePickerResult[];
}

export type RootStackParamList = {
  Home: undefined;
  Details: { image: ImagePickerResult };
};

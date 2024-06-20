export interface ImageData {
  path: string;
  creationDate: Date;
}
export interface CameraImageCropProps {
  imagePath: string;
  onCropComplete: () => void;
}
export interface ModalStore {
  isModalVisible: boolean;
  toggleModal: () => void;
}

export interface ImageStore {
  images: ImageData[];
  addImages: (newImages: ImageData[]) => void;
}

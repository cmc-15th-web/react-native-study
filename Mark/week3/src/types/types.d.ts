import { TextStyle } from "react-native";

declare global {
  type SvgProps = {
    width: string;
    height: string;
    fill?: string;
  };
  
  type UploadedImage = {
    path: string;
    modificationDate: string;
  };
  
  type GradientTextProp = {
    children: React.ReactNode;
    style?: TextStyle | TextStyle[];
    colors: string[];
  };
}

// 이 줄은 파일이 모듈로 간주되지 않도록 합니다.
export {};